import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksSearch'
})
export class FilterBooksSearchPipe implements PipeTransform {

  /**
   *
   * @param {Array} books - represents concated arrays on pipe filter
   * @param {Object} args - represents information Object to the filter
   * @param {Array} args.books - represents all books in a before any filter applied
   * @param {String} args.queryBooks - represents a string to be found by the filter in a books Array
   * @param {Boolean} args.searchInAllBook - true to use args['books']<Array>, false to use books<Array>
   * return {array} books - Return the book<Array> filtered
   */
  transform(books: Array<any>, args?: Object): any {

    if (!args['books']) return [];
    if(args['queryBooks'] === '') return books;

    const lowerQuery = args['queryBooks'].toLocaleLowerCase();

    return args['searchInAllBook']
      ? args['books'].filter( b => b.name.toLowerCase().indexOf(lowerQuery) != -1 || b.author['name'].toLowerCase().indexOf(lowerQuery) != -1)
      : books.filter( b => b.name.toLowerCase().indexOf(lowerQuery) != -1 || b.author['name'].toLowerCase().indexOf(lowerQuery) != -1);
  }

}
