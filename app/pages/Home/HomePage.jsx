import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { BooksList } from 'components/BooksList';

import { deleteBookAction, editBookAction, getBooksAction } from 'actions/book';

export function HomePage() {
  const dispatch = useDispatch();
  const { books, loaded } = useSelector(state => ({ books: state.books, loaded: state.loaded }));

  const getBooks = useCallback(() => dispatch(getBooksAction()), [dispatch]);
  const editBook = useCallback(book => dispatch(editBookAction(book)), [dispatch]);
  const deleteBook = useCallback(id => dispatch(deleteBookAction(id)), [dispatch]);

  useEffect(() => {
    if (books.length === 0) {
      console.log(books.length);
      getBooks();
    }
  }, [getBooks, loaded, books.length]);

  if (!loaded) return null;

  return (
    <Grid container justify="center" component="main">
      <BooksList books={books} onEditBook={editBook} onDeleteBook={deleteBook} />
    </Grid>
  );
}
