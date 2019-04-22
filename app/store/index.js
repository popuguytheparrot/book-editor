import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'reducers';

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools());

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
