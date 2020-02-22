import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { BookForm } from 'components/BookForm';

import { addBookAction, editBookAction } from 'actions/book';

function getBookSelector(books, id) {
  return books.find(book => book.id === id);
}

export function AddBookPage({ id, edit }) {
  const dispatch = useDispatch();

  const book = useSelector(({ books }) => getBookSelector(books, id));

  const editBook = useCallback(bookId => dispatch(editBookAction(bookId)), [dispatch]);
  const addBook = useCallback(newBook => dispatch(addBookAction(newBook)), [dispatch]);

  return (
    <Grid container justify="center" component="main">
      <BookForm onAddBook={addBook} onEditBook={editBook} edit={edit} book={book} />
    </Grid>
  );
}
