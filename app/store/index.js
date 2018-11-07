import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'reducers';
// middlewares
import thunk from 'redux-thunk';

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
