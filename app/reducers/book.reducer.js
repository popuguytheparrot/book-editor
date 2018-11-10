import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, GET_BOOKS } from 'constants/actionTypes/book';
import books from 'mocks/books';

const initState = {
  loaded: false,
  books: []
};

function addBook(booksList, book) {
  return [...booksList, book];
}

function deleteBook(booksList, bookID) {
  return booksList.filter(book => book.id !== bookID);
}

export function booksReducer(state = initState, action) {
  switch (action.type) {
    case GET_BOOKS: {
      return {
        ...state,
        loaded: true,
        books
      };
    }
    case ADD_BOOK: {
      return {
        ...state,
        books: addBook(state.books, action.payload.book)
      };
    }
    case DELETE_BOOK: {
      return {
        ...state,
        loaded: true,
        books: deleteBook(state.books, action.payload.id)
      };
    }
    case EDIT_BOOK: {
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
