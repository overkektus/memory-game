import { createAction, createReducer } from 'redux-act'
import { push } from 'connected-react-router'
import { map, clone, shuffle, random } from 'lodash'
import cardTypes from 'consts/cards'

export const REDUCER = 'CARDS'
const NS = `${REDUCER}__`

const initialState = {
  isOverlooked: false,
  isFreeze: true,
  score: 0,
  time: 0,
}

const reducer = createReducer({}, initialState)

const setGameboard = createAction(`${NS}SET_GAMEBOARD`)
reducer.on(setGameboard, (state, gameboard) => ({
  ...state,
  gameboard,
}))

export const startGame = count => dispatch => {
  const gameboard = []
  for (let i = 0; i < count; i++) {
    gameboard.push({
      id: i,
      isFlipped: true,
      isGuessed: false,
    })
  }
  const cardsIndex = []
  for (let i = 0; i < count / 2; i++) {
    let cardIndex = random(0, cardTypes.length - 1)
    cardsIndex.push(cardIndex)
  }
  const cardsIndexCopy = map(cardsIndex, clone)
  const fullCardsIndex = cardsIndex.concat(cardsIndexCopy)
  for (let i = 0; i < fullCardsIndex.length; i++) {
    gameboard[i].type = cardTypes[fullCardsIndex[i]]
  }
  const gameboardShuffled = shuffle(gameboard)
  dispatch(setGameboard(gameboardShuffled))
}

const setOverviewedBoard = createAction(`${NS}STOP_OVERVIEW`)
reducer.on(setOverviewedBoard, (state, gameboard) => ({
  ...state,
  gameboard,
  isOverlooked: true,
  isFreeze: false,
}))

export const stopOverview = gameboard => dispatch => {
  const flippedGameboard = gameboard.map(card => {
    return {
      ...card,
      isFlipped: !card.isFlipped,
    }
  })
  dispatch(setOverviewedBoard(flippedGameboard))
}

const flipCard = createAction(`${NS}FLIP_CARD`)
reducer.on(flipCard, (state, cardId) => {
  const { gameboard } = state
  const newGameboard = gameboard.map(card => {
    if (card.id === cardId) {
      return {
        ...card,
        isFlipped: !card.isFlipped,
      }
    } else {
      return card
    }
  })
  return {
    ...state,
    gameboard: newGameboard,
  }
})

const setScore = createAction(`${NS}SET_SCORE`)
reducer.on(setScore, (state, newScore) => {
  const { score } = state.gameboard
  return {
    ...state,
    score: ~~score + newScore,
  }
})

const getUnguessedFlipped = gameboard => gameboard.filter(({ isFlipped, isGuessed }) => isFlipped && !isGuessed)

const countingUnguessedFlipped = gameboard => getUnguessedFlipped(gameboard).length

const getGuessed = gameboard => gameboard.filter(({ isGuessed }) => isGuessed)

const countingGuessedPair = gameboard => getGuessed(gameboard).length / 2

const getUnGuessed = gameboard => gameboard.filter(({ isGuessed }) => !isGuessed)

const countingUnGuessedPair = gameboard => getUnGuessed(gameboard).length / 2

const compare = cards => cards[0].type === cards[1].type

const markGuessed = (gameboard, guessed) =>
  gameboard.map(card => {
    if (card.id === guessed[0].id || card.id === guessed[1].id) {
      return {
        ...card,
        isGuessed: true,
      }
    }
    return card
  })

const coefficient = 42

const reviewTimeout = 1000

export const clickCard = cardId => (dispatch, getState) => {
  let gameboard = getState().gameboard.gameboard
  let countUnguessedFlipped = countingUnguessedFlipped(gameboard)
  const guessed = getGuessed(gameboard)
  let isClickOnGuessed = false
  guessed.forEach(({ id }) => {
    if (id === cardId) {
      isClickOnGuessed = true
    }
  })
  if (countUnguessedFlipped < 2 && !isClickOnGuessed) {
    dispatch(flipCard(cardId))
  }
  gameboard = getState().gameboard.gameboard
  const { score } = getState().gameboard
  countUnguessedFlipped = countingUnguessedFlipped(gameboard)
  if (countUnguessedFlipped === 2) {
    const flipped = getUnguessedFlipped(gameboard)
    const isEqual = compare(flipped)
    if (isEqual) {
      const countUnGuessed = countingUnGuessedPair(gameboard)
      const newScore = score + countUnGuessed * coefficient
      dispatch(setScore(newScore))
      const newGameboard = markGuessed(gameboard, flipped)
      dispatch(setGameboard(newGameboard))
    } else {
      const countGuessed = countingGuessedPair(gameboard)
      const newScore = score - countGuessed * coefficient
      console.log(newScore)
      dispatch(setScore(newScore))
      setTimeout(() => flipped.forEach(card => dispatch(flipCard(card.id))), reviewTimeout)
    }
  }
  gameboard = getState().gameboard.gameboard
  const countGuessedPair = countingGuessedPair(gameboard)
  if (countGuessedPair === 9) {
    setTimeout(() => dispatch(push('/result')), reviewTimeout)
  }
}

export default reducer
