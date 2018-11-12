import {
  START_GAME,
  START_OVERVIEW,
  STOP_OVERVIEW,
  CARD_CLICK
} from '../actions/actionsType';

const initialState = {
  isOverlooked: false
}

const gameboard = (state = initialState, action) => {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        gameboard: action.payload
      };
    case START_OVERVIEW:
      return {
        ...state,
        isOverlooked: !state.isOverlooked
      }
    case STOP_OVERVIEW:
      return {
        ...state,
        gameboard: action.payload
      }
    case CARD_CLICK:
      return {
        ...state,
        gameboard: action.payload
      }
    default:
      return state;
  }
}

export default gameboard;
