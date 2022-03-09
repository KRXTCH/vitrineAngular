import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.models';

@Pipe({name: 'sortByName'})
export class SortByNamePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if(desc) return b.name.localeCompare(a.name)
      else return a.name.localeCompare(b.name)
    });
  }
}