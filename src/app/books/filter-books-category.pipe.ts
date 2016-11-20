import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooksCategory'
})
export class FilterBooksCategoryPipe implements PipeTransform {

  transform(books: Array<any>, args?: string): any {
    if (!books) return null;
    if(args === 'all' || !args) return books;
    return books.filter( (b) => b.genre['category'] === args);
  }

}
