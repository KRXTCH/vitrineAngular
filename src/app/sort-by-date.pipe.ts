import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.models';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(products : Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if(desc) return b.date.getTime() - a.date.getTime()
      else return a.date.getTime() - b.date.getTime()
    });
  }
}
