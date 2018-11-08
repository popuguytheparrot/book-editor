import React, { Component } from 'react';
import { arrayOf, bool, func, object } from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { BooksList } from 'components/BooksList';

import { getBooksAction } from './actions';

class Home extends Component {
  static propTypes = {
    getBooks: func.isRequired,
    books: arrayOf(object).isRequired,
    loaded: bool.isRequired
  };

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  render() {
    const { books, loaded } = this.props;
    if (!loaded) return null;
    return (
      <Grid container justify="center" component="main">
        <Grid item>
          <BooksList books={books} />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ booksList }) {
  const { books, loaded } = booksList;
  return { books, loaded };
}

function mapDispatchToProps(dispatch) {
  return {
    getBooks() {
      dispatch(getBooksAction());
    }
  };
}

export const withReduxHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
