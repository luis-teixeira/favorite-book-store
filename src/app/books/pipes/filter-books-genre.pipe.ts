import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksGenre'
})
export class FilterBooksGenrePipe implements PipeTransform {

  /**
   * @param {Array} books - represents concated arrays on pipe filter
   * @param {string} args - Optionl string argument to test the Genre on book<Array>
   * return {array} books - Return the book<Array> filtered
   */
  transform(books: Array<any>, args?: string): any {
    if (!books) return [];
    if(args === 'all' || !args) return books;
    return books.filter( (b) => b.genre['name'] === args);
  }

}
