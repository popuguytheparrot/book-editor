import React from 'react';
import { Router } from '@reach/router';
// routes
import { NotFound } from 'pages/NotFound';

export const Routes = () => (
  <Router>
    <NotFound default />
  </Router>
);
