import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gameboard from './gameboard';

const reducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    gameboard
  });
};

export default reducer;
