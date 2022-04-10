import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Observable<any>;
  sortNameOrderBy : string = 'asc';
  sortDateOrderBy : string = 'asc';
  search: string = "";

  constructor(public productsService: ProductsService){ }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    console.log(this.productsService.products);
  }

  onSearchProduct(data : string){
    this.search = data;
   }

   onNameChange(data: string){
     this.sortNameOrderBy = data;
   }

   onDateChange(data: string){
      this.sortDateOrderBy = data;
   }
}
