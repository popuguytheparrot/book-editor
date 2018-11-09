import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import { Routes } from 'routes';
// actions
import { addBookAction } from 'pages/Home/actions';
// theming and styling
import { theme } from './theme';

const style = {
  background: 'linear-gradient(to right, #f79d00, #64f38c)',
  fab: {
    position: 'fixed',
    bottom: 50,
    right: 50
  },
  typo: {
    textDecoration: 'none'
  }
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" color="inherit" component={Link} to="/" style={style.typo}>
            Book Editor
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes />
      <Button variant="fab" color="primary" style={style.fab} component={Link} to="/book/add">
        <AddIcon />
      </Button>
    </MuiThemeProvider>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addBook(book) {
      dispatch(addBookAction(book));
    }
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
