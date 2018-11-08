import React from 'react';
import { Router } from '@reach/router';
// routes
import { NotFound } from 'pages/NotFound';
import { withReduxHome as Home } from 'pages/Home';

export const Routes = () => (
  <Router>
    <Home path="/" />
    <NotFound default />
  </Router>
);
