export function validateAuthors(authors = []) {
  const errors = {};
  return authors.map(author => {
    if (!author.name) errors.name = 'Обязательное поле';
    if (!author.surname) errors.surname = 'Обязательное поле';
    return errors;
  });
}
