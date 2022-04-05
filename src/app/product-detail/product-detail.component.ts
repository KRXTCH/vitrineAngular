import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.models';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  myProduct!: any;
  id: number = 0;
  orientation: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id'])
    } );
   }

  ngOnInit() {
    this.myProduct = this.productService.getOneProduct(this.id);
    this.orientation = "landscape"
  }

}
