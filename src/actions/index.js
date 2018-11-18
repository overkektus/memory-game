import {
  START_GAME,
  START_OVERVIEW,
  STOP_OVERVIEW,
  CARD_CLICK
} from './actionsType';
import cardTypes from '../consts/cards';
import { map, clone, shuffle, random } from 'lodash';

export const startGame = (count) => {
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

  return {
    type: START_GAME,
    payload: gameboardShuffled
  }
};

export const startOverview = () => {
  return {
    type: START_OVERVIEW
  }
}

export const stopOverview = (gameboard) => {
  const newGameboard = gameboard.map(card => {
    return {
      ...card,
      isFlipped: !card.isFlipped
    }
  });
  return {
    type: STOP_OVERVIEW,
    payload: newGameboard
  }
}

export const cardClick = (cardId, gameboard, isFreezed) => {
  let flippedCount = 0;
  gameboard.forEach(card => {
    if(card.isFlipped) {
      flippedCount++;
    }
  });

  let newGameboard = Object.assign({}, gameboard);
  if(flippedCount > 0) {
    console.log(newGameboard);
  }

  newGameboard = gameboard.map(card => {
    if(card.id === cardId && !isFreezed) {
      return {
        ...card,
        isFlipped: !card.isFlipped
      }
    }
    return card;
  });

  return {
    type: CARD_CLICK,
    payload: newGameboard
  }
}