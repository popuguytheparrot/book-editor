import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { Routes } from 'routes';
// theming and styling
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
