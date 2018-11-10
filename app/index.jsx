import React from 'react';
import { connect } from 'react-redux';
import { Link, Match } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import AddIcon from '@material-ui/icons/Add';

import { Routes } from 'routes';
// theming and styling
import { theme } from './theme';
// actions

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

function App(props) {
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
      <Match path="/">
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
    </MuiThemeProvider>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
