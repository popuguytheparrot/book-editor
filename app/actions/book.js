import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, GET_BOOKS } from 'constants/actionTypes/book';

export function getBooksAction() {
  return {
    type: GET_BOOKS
  };
}

export function deleteBookAction(id) {
  return {
    type: DELETE_BOOK,
    payload: { id }
  };
}

export function addBookAction(book) {
  return {
    type: ADD_BOOK,
    payload: { book }
  };
}

export function editBookAction(book) {
  return {
    type: EDIT_BOOK,
    payload: { book }
  };
}
