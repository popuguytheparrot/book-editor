import React from 'react';
import Typography from '@material-ui/core/Typography';

import BooksListItem from 'components/BooksListItem';

function renderBooks(books) {
  if (books.length > 0) {
    return books.map(book => (
      <BooksListItem
        key={book.id}
        id={book.id}
        title={book.title}
        authors={book.authors}
        image={book.image}
        ISBN={book.ISBN}
        pageCount={book.pageCount}
        publishingHouse={book.publishingHouse}
        publishYear={book.publishYear}
        released={book.released}
      />
    ));
  }
  return <Typography variant="h2">Ой, что-то пошло не так</Typography>;
}

export function BooksList({ books }) {
  return renderBooks(books);
}
