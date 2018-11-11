import React from 'react';
import { Router } from '@reach/router';
// routes
import { NotFound } from 'pages/NotFound';
import { withReduxHomePage as HomePage } from 'pages/Home';
import { withReduxAddBookPage as BookPage } from 'pages/Book/AddBook';
// import { withReduxHomePage as HomePage } from 'pages/Home';

export const Routes = () => (
  <Router>
    <HomePage path="/" />
    <BookPage path="/book/add" />
    <BookPage path="/book/:id/edit" edit />
    <NotFound default />
  </Router>
);
