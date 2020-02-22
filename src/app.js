import React from 'react';
import { context } from '@reatom/react';
import { Route, useLocation } from 'wouter';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import makeStyles from '@material-ui/styles/makeStyles';

// icons
import AddIcon from '@material-ui/icons/Add';

// libs
import { loadState, saveState } from '../libs/localStorage';

// store
import { configureStore } from '../app/store';

// theming and styling
import { theme } from '../app/theme';

// pages
import { HomePage } from '../app/pages/Home';
import { AddBookPage } from '../app/pages/Book/AddBook';

// components
import { LinkBehavior } from '../app/components/Link';

// redux store
const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

const useStyles = makeStyles({
  appBar: {
    background: 'linear-gradient(to right, #f79d00, #64f38c)',
    marginBottom: 16
  },
  fab: {
    position: 'fixed',
    bottom: 50,
    right: 50
  },
  typo: {
    textDecoration: 'none'
  }
});

export function App() {
  const [location] = useLocation();
  const { appBar, fab, typo } = useStyles();

  return (
    <context.Provider value={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              component={LinkBehavior}
              to="/"
              className={typo}
            >
              Book Editor
            </Typography>
          </Toolbar>
        </AppBar>

        <Route path="/" component={HomePage} />
        <Route path="/book/add" component={AddBookPage} />
        <Route path="/book/:id/edit">{params => <AddBookPage edit id={params.id} />}</Route>

        <Zoom in={location === '/'} unmountOnExit>
          <Fab color="primary" className={fab} component={LinkBehavior} to="/book/add">
            <AddIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </context.Provider>
  );
}
