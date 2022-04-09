import {Injectable} from '@angular/core';
import {CartModels} from "../models/Cart.models";
import {ProductCart} from "../models/ProductCart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModels = new CartModels([], 0, 0, new Date());
  previousQuantity: number = 1;
  loaclCart: Array<any> = []

  constructor() {
  }

  addToCart(productCart: ProductCart) {
    this.cart.products.push(productCart);
    this.cart.total += productCart.price * productCart.quantity;
    this.cart.count++;
  }

  addToLocalCart(data: any){
    if(this.isProductInCart(data) === 0){
      console.log(this.loaclCart)
      this.loaclCart.push(data);
      localStorage.setItem("cart", JSON.stringify(this.loaclCart));
    }
  }

  getProductCount(){
    return this.cart.count;
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(productCart: ProductCart) {
    this.cart.products.splice(this.cart.products.indexOf(productCart), 1);
    this.cart.total -= productCart.price;
    this.cart.count--;
  }

  clearCart() {
    this.cart.products = [];
    this.cart.total = 0;
    this.cart.count = 0;
    this.cart.createdAt = new Date();
  }

  updateQuantity(value: any |undefined) {
    console.log(value);
  }

  changeQuantity(productCart: ProductCart, value: number) {
    productCart.quantity = value;

    if (value > this.previousQuantity){
      this.cart.total += productCart.price;
      this.cart.count++;
      this.previousQuantity = value;
    } else if (value < this.previousQuantity){
      this.cart.total -= productCart.price;
      this.cart.count--;
      this.previousQuantity = value;
    }
  }

  getTotalPrice() {
    return this.cart.total;
  }

  isProductInCart(data : any){
    if(this.loaclCart === null){
      this.loaclCart = JSON.parse(localStorage.getItem("cart") as string);
    }
    return this.loaclCart.filter( e => e.id === data.id && e.edition === data.edition).length;
  }
}
