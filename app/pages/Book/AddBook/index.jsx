import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { AddBookForm } from 'components/AddBookForm';

// import { deleteBookAction, editBookAction, getBooksAction } from './actions';

class AddBookPage extends Component {
  render() {
    // if (!loaded) return null;
    return (
      <Grid container justify="center" component="main">
        <AddBookForm />
      </Grid>
    );
  }
}

function mapStateToProps({ booksList }) {
  const { books, loaded } = booksList;
  return { books, loaded };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getBooks() {
//       dispatch(getBooksAction());
//     },
//     editBook(book) {
//       dispatch(editBookAction(book));
//     },
//     deleteBook(id) {
//       dispatch(deleteBookAction(id));
//     }
//   };
// }

export const withReduxAddBookPage = connect(
  mapStateToProps
  // mapDispatchToProps
)(AddBookPage);
