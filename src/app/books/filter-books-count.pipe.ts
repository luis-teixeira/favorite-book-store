import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksCount'
})
export class FilterBooksCountPipe implements PipeTransform {

  transform(books: Array<any>, args?: any): any {
    let booksCount = args;
    if (!books) return null;
    booksCount.count = books.length;
    return books;
  }

}
