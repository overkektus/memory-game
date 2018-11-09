import { START_GAME } from '../actions/actionsType';

const gameboard = (state = {}, action) => {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        gameboard: action.payload
      };
    default:
      return state;
  }
}

export default gameboard;
