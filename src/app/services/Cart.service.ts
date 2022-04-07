import {Injectable} from '@angular/core';
import {CartModels} from "../models/Cart.models";
import {Product} from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModels[] = [];

  constructor() {
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(product: Product) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }

  clearCart() {
    this.cart = [];
  }
}
