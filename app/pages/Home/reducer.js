import { GET_BOOKS } from 'pages/Home/types';
import books from 'mocks/books';

const initState = {
  loaded: false
};

export function booksReducer(state = initState, action) {
  switch (action.type) {
    case GET_BOOKS: {
      return {
        ...state,
        loaded: true,
        books
      };
    }
    default: {
      return state;
    }
  }
}
