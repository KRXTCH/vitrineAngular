import {Injectable} from '@angular/core';
import {CartModels} from "../models/Cart.models";
import {Product} from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModels = new CartModels([], 0, 0, new Date());

  constructor() {
  }

  addToCart(product: Product) {
    this.cart.products.push(product);
    this.cart.total += product.price;
    this.cart.count++;
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(product: Product) {
    this.cart.products.splice(this.cart.products.indexOf(product), 1);
    this.cart.total -= product.price;
    this.cart.count--;
  }

  clearCart() {
    this.cart.products = [];
    this.cart.total = 0;
    this.cart.count = 0;
    this.cart.createdAt = new Date();
  }
}
