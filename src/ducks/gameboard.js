import { createAction, createReducer } from 'redux-act';
import { map, clone, shuffle, random } from 'lodash';
import cardTypes from 'consts/cards';

export const REDUCER = 'CARDS';
const NS = `${REDUCER}__`;

const initialState = {
  isOverlooked: false,
};

const reducer = createReducer({}, initialState);

const flipCard = createAction(`${NS}FLIP_CARD`);
reducer.on(flipCard, (state, id) => ({
  ...state,
}));

const setGameboard = createAction(`${NS}SET_GAMEBOARD`);
reducer.on(setGameboard, (state, gameboard) => ({
  ...state,
  gameboard
}));

export const startGame = (count) => (dispatch) => {
  const gameboard = [];
  for(let i = 0; i < count; i++) {
    gameboard.push({
      id: i,
      isFlipped: true
    });
  }

  const cardsIndex = [];
  for(let i = 0; i < count/2; i++) {
    let cardIndex = random(0, cardTypes.length - 1);
    cardsIndex.push(cardIndex);
  }
  const cardsIndexCopy = map(cardsIndex, clone);
  const fullCardsIndex = cardsIndex.concat(cardsIndexCopy);


  for(let i = 0; i < fullCardsIndex.length; i++) {
    gameboard[i].type = cardTypes[fullCardsIndex[i]];
  }

  const gameboardShuffled = shuffle(gameboard);

  dispatch(setGameboard(gameboardShuffled));
};

export const clickCard = (gameboard, id) => (dispatch) => {

};

export default reducer;
