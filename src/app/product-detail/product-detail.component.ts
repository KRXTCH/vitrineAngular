import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.models';
import { ProductCart } from '../models/ProductCart';
import { CartService } from '../services/Cart.service';
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
  quantity: number = 1;
  currentPrice! : number;
  currentEdition : string = "Colector";

  constructor(
    private productService: ProductsService,
    private cartService : CartService,
    private route: ActivatedRoute,
    private router: Router) {
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
  }

  AddToCart(){
    this.cartService.addToCart(new ProductCart(this.myProduct.id, this.myProduct.name, this.myProduct.description,
      this.myProduct.image, this.currentPrice, this.myProduct.date, this.myProduct.cover_img, this.currentEdition, this.quantity))
  }

  isInCart(name : string){
    return this.cartService.isProductInCart(name).length;
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }
}
