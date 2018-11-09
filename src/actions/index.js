import { START_GAME } from './actionsType';
import cardTypes from '../consts/cards';
import { randomInteger } from '../utils';
import { map, clone, shuffle } from 'lodash';

export const startGame = (count) => {
  const gameboard = [];
  for(let i = 0; i < count/2; i++) {
    let cardIndex = randomInteger(0, cardTypes.length - 1);
    let card = {
      id: i,
      type: cardTypes[cardIndex],
      isFlipped: false
    }
    gameboard.push(card);
  }
  const gameboardCopy = map(gameboard, clone);
  const gameboardShuffled = shuffle(gameboard.concat(gameboardCopy));
  return {
    type: START_GAME,
    payload: gameboardShuffled
  }
};
