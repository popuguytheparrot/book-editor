import React, { useEffect } from 'react';
import { useAction, useAtom } from '@reatom/react';

import Grid from '@material-ui/core/Grid';

import { BooksList } from 'components/BooksList';

import { deleteBook, getBooks } from 'actions/book';
import { bookAtom } from 'reducers';

export function HomePage() {
  const { books, loaded } = useAtom(bookAtom);

  const handleGetBooks = useAction(getBooks);
  const handleDeleteBook = useAction(id => deleteBook(id));

  useEffect(() => {
    if (books.length === 0) {
      handleGetBooks();
    }
  }, [handleGetBooks, books.length]);

  if (!loaded) return null;

  return (
    <Grid container justify="center" component="main">
      <BooksList books={books} onDeleteBook={handleDeleteBook} />
    </Grid>
  );
}
