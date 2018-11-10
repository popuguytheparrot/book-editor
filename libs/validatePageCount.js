export function validatePageCount(pageCount) {
  let result = '';
  if (pageCount === 0 || pageCount > 10000) {
    result = 'Кол-во страниц должно быть больше 0 и не более 10000';
  }
  return result;
}
