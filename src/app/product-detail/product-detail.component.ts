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
  quantity: number = 1
  currentPrice! : number 

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
    this.currentPrice = this.myProduct.editions["Colector"]
  }

  OnQuantityUp(){
    this.quantity++;
  }

  OnQuantityDown(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  OnChange(data : any){
    this.currentPrice = this.myProduct.editions[data.value]
    console.log(this.currentPrice)
  }

}
