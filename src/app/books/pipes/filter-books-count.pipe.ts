import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksCount'
})
export class FilterBooksCountPipe implements PipeTransform {

  /**
   * FilterBooksCountPipe represents the book<Array> filtered lenght
   * @param {Array} books - represents concated arrays on pipe filter
   * @param {Object} args - Optionl object argument
   * return {array} books - Return the book<Array>
   */
  transform(books: Array<any>, args?: Object): any {
    let booksCount = args;
    if (!books) return [];
    booksCount['count'] = books.length;
    return books;
  }

}
