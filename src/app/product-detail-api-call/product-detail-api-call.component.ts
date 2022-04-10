import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail-api-call',
  templateUrl: './product-detail-api-call.component.html',
  styleUrls: ['./product-detail-api-call.component.scss']
})
export class ProductDetailApiCallComponent implements OnInit {
  myProduct!: Observable<any>;
  id: number = 0;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id'])
    } );
   }

  ngOnInit(): void {
    this.myProduct = this.productService.getOneProduct(this.id);
  }

}
