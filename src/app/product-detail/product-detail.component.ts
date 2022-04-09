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
  quantity: number = 1;
  currentPrice! : number;
  currentEdition : string = "Collector";
  isInCart : number = 0;

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
    this.currentPrice = this.myProduct.editions["Collector"];
    this.isInCart = this.cartService.isProductInCart({id:this.myProduct.id, quantity : this.quantity, edition : "Collector"});
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
    this.currentPrice = this.myProduct.editions[data.value];
    this.currentEdition = data.value;
    this.isInCart = this.cartService.isProductInCart({id:this.myProduct.id, quantity : this.quantity, edition : this.currentEdition});
  }

  AddToCart(){
    this.cartService.addToLocalCart({id:this.myProduct.id, quantity : this.quantity, edition : this.currentEdition});
    this.isInCart = this.cartService.isProductInCart({id:this.myProduct.id, quantity : this.quantity, edition : this.currentEdition});

  }

  goToCart(){
    this.router.navigate(['/cart']);
  }
}
