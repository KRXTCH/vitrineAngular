import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.models';
import { CartService } from '../services/Cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() myProduct!: any;
  quantity: number = 1;
  currentPrice! : number;
  currentEdition : string = "Collector";
  isInCart : number = 0;

  constructor(
    private cartService : CartService,
    private router: Router) {
   }
  ngOnInit(): void {
    
  }
  ngOnChanges() {
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