import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';

import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import { configureStore } from 'store';
import { loadState, saveState } from 'libs/localStorage';

import AppPage from '../app';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';
// redux store
const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  console.log('storeSave');
  saveState(store.getState());
});

export function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <CssBaseline />
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Router>
            <AppPage path="/*" />
          </Router>
        </JssProvider>
      </Fragment>
    </Provider>
  );
}
