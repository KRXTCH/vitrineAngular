import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.models';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(products : Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if(desc) return bDate.getTime() -  aDate.getTime()
      else return aDate.getTime() - bDate.getTime()
    });
  }
}
