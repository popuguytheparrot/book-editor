import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { BooksList } from 'components/BooksList';

import { deleteBookAction, editBookAction, getBooksAction } from 'actions/book';

function HomePage({ loaded, getBooks, books, editBook, deleteBook }) {
  useEffect(() => {
    getBooks();
  }, [getBooks, loaded]);

  if (!loaded) return null;

  return (
    <Grid container justify="center" component="main">
      <BooksList books={books} onEditBook={editBook} onDeleteBook={deleteBook} />
    </Grid>
  );
}

function mapStateToProps({ booksList }) {
  const { books, loaded } = booksList;
  return { books, loaded };
}

function mapDispatchToProps(dispatch) {
  return {
    getBooks() {
      dispatch(getBooksAction());
    },
    editBook(book) {
      dispatch(editBookAction(book));
    },
    deleteBook(id) {
      dispatch(deleteBookAction(id));
    }
  };
}

export const withReduxHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
