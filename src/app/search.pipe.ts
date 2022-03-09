import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchValue?: any) {
    return (products || []).filter(p => p.name.includes(searchValue));
  }

}
