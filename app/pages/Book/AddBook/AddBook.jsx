import React from 'react';
import { useAction, useAtom } from '@reatom/react';

import Grid from '@material-ui/core/Grid';
import { BookForm } from 'components/BookForm';

import { addBook, editBook } from 'actions/book';
import { bookAtom } from 'reducers';

function getBookSelector(books, id) {
  return books.find(book => book.id === id);
}

export function AddBookPage({ id, edit }) {
  const { books } = useAtom(bookAtom);
  const bookState = getBookSelector(books, id);

  const handleEditBook = useAction(book => editBook(book));
  const handleAddBook = useAction(book => addBook(book));

  return (
    <Grid container justify="center" component="main">
      <BookForm
        onAddBook={handleAddBook}
        onEditBook={handleEditBook}
        edit={edit}
        book={bookState}
      />
    </Grid>
  );
}
