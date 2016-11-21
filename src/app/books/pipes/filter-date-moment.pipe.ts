import { Pipe, PipeTransform } from '@angular/core';

declare var moment:any;

@Pipe({
  name: 'filterDateMoment'
})
export class FilterDateMomentPipe implements PipeTransform {

  transform(date: any, filter: any): any {

    if(!date) return date;
    if(filter === 'from') {
      return moment(date).from();
    }
    return date;
  }

}
