import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterListGenreBy'
})
export class FilterListGenreByPipe implements PipeTransform {

  transform(value: Array<any>, args: string): any {

    if(!value) return [];

    let filterArray = [];

    value.filter((v) => {
      if( filterArray.indexOf(v.genre[args]) == -1) {
        filterArray.push(v.genre[args]);
      }
    });

    return filterArray;
  }
}
