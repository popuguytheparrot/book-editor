import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { BookForm } from 'components/BookForm';

import { addBookAction, editBookAction } from 'actions/book';

function getBookSelector(books, id) {
  return books.find(book => book.id === id);
}

class BookPage extends Component {
  render() {
    const { addBook, editBook, edit, book } = this.props;
    return (
      <Grid container justify="center" component="main">
        <BookForm onAddBook={addBook} onEditBook={editBook} edit={edit} book={book} />
      </Grid>
    );
  }
}

function mapStateToProps({ booksList }, ownProps) {
  const { edit, id } = ownProps;
  const { books, loaded } = booksList;

  return { books, loaded, book: getBookSelector(books, id) };
}

function mapDispatchToProps(dispatch) {
  return {
    addBook(bookData) {
      dispatch(addBookAction(bookData));
    },
    editBook(bookID) {
      dispatch(editBookAction(bookID));
    }
  };
}

export const withReduxAddBookPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
