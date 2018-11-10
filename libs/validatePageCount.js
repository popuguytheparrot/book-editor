export function validatePageCount(pageCount) {
  if (pageCount === 0 || pageCount > 10000) {
    return 'Кол-во страниц должно быть больше 0 и не более 10000';
  }
}
