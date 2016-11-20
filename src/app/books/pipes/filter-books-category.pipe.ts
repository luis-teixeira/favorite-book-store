import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksCategory'
})
export class FilterBooksCategoryPipe implements PipeTransform {

  /**
   * @param {Array} books - represents concated arrays on pipe filter
   * @param {string} args - Optionl string argument to test the Category on book<Array>
   * return {array} books - Return the book<Array> filtered
   */

  transform(books: Array<any>, args?: string): any {
    if (!books) return null;
    if(args === 'all' || !args) return books;
    return books.filter( (b) => b.genre['category'] === args);
  }

}
