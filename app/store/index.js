import { createStore } from '@reatom/core';

import { bookAtom } from 'reducers';

export function configureStore(initialState) {
  const store = createStore(bookAtom, initialState);

  return store;
}
