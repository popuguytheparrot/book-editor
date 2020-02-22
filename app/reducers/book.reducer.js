import { declareAtom } from '@reatom/core';

import booksMock from 'mocks/books';

import { getBooks, deleteBook, addBook, editBook } from 'actions/book';

const initState = {
  loaded: false,
  books: []
};

function handleAddBook(booksList, book) {
  return [...booksList, book];
}

function handleDeleteBook(booksList, bookID) {
  return booksList.filter(book => book.id !== bookID);
}

function handleEditBook(booksList, editedBook) {
  return booksList.map(book => {
    if (book.id === editedBook.id) {
      return { ...book, ...editedBook };
    }
    return book;
  });
}

export const bookAtom = declareAtom(initState, on => [
  on(getBooks, state => ({
    ...state,
    loaded: true,
    books: booksMock
  })),
  on(addBook, (state, book) => ({
    ...state,
    books: handleAddBook(state.books, book)
  })),
  on(deleteBook, (state, id) => ({
    ...state,
    books: handleDeleteBook(state.books, id)
  })),
  on(editBook, (state, book) => ({
    ...state,
    books: handleEditBook(state.books, book)
  }))
]);
