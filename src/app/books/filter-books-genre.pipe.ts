import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksGenre'
})
export class FilterBooksGenrePipe implements PipeTransform {

  transform(books: Array<any>, args?: string): any {
    if (!books) return null;
    if(args === 'all' || !args) return books;
    return books.filter( (b) => b.genre['name'] === args);
    return null;
  }

}
