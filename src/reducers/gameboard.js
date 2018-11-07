import { gameboardStore } from '../store/';
import { START_GAME } from '../actions/actionsType';

const gameboard = (state = gameboardStore, action) => {
  switch(action.type) {
    case START_GAME:

      break;
    default:
      return state;
  }
}

export default gameboard;
