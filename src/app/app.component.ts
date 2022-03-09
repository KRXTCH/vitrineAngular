import { Component, Input, OnInit} from '@angular/core';
import { Product } from './models/product.models';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products!: Product[];

  sortNameOrderBy : string = "asc";

  sortDateOrderBy : string = "asc";

  @Input()
  search: string = "";

  constructor(private productsService: ProductsService){ }


  ngOnInit() {
    this.products = this.productsService.products;
  }
}


