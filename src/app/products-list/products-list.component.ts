import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: Product[];

  sortNameOrderBy : string = "asc";

  sortDateOrderBy : string = "asc";

  search: string = "";

  constructor(private productsService: ProductsService){ }

  ngOnInit() {
    this.products = this.productsService.products;
  }

  onSearchProduct(data : string){
    this.search = data;
   }
}
