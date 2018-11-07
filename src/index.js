import React from 'react';

import { render } from 'react-dom';

import App from './app';

function renderApp() {
  return render(<App />, document.getElementById('root'));
}

renderApp();
