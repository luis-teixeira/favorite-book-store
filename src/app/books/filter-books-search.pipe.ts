import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksSearch'
})
export class FilterBooksSearchPipe implements PipeTransform {

  /**
   * Adds two Arrays
   * @param {Array} books - represents concated arrays on pipe filter
   * @param {Array} allBooks - represents all books array without filter
   * @param {String} query - represents a string to be found in a bookarray
   * @param {Boolean} all - true to use allbooks<Array>, false to use books<Array>
   */
  transform(books: Array<any>, allBooks?: Array<any>, query?: string, all?: boolean): any {

    if (!allBooks) return null;

    const allBooks = allBooks;
    const query = query;
    const all = all;

    if(query === '') return books;
    return all
      ? allBooks.filter( b => b.name.indexOf(query) != -1 || b.author['name'].indexOf(query) != -1)
      : books.filter( b => b.name.indexOf(query) != -1 || b.author['name'].indexOf(query) != -1);
  }

}
