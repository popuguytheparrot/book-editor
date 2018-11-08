import { combineReducers } from 'redux';
import { booksReducer } from 'pages/Home/reducer';

export const rootReducer = combineReducers({
  booksList: booksReducer
});
