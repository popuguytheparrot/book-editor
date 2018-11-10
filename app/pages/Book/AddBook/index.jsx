import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { AddBookForm } from 'components/AddBookForm';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import { Link, Match } from '@reach/router';
import AddIcon from '@material-ui/icons/Add';

import { getBooksAction } from 'actions/book';

const style = {
  fab: {
    position: 'fixed',
    bottom: 50,
    right: 50
  }
};

class AddBookPage extends Component {
  render() {
    // if (!loaded) return null;
    return (
      <Grid container justify="center" component="main">
        <AddBookForm />
        <Match path="/book/add">
          {({ match }) =>
            match && (
              <Zoom in={match} unmountOnExit>
                <Button
                  variant="fab"
                  color="primary"
                  style={style.fab}
                  component={Link}
                  to="/book/add"
                >
                  <AddIcon />
                </Button>
              </Zoom>
            )
          }
        </Match>
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
    },
  };
}

export const withReduxAddBookPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookPage);
