import {Injectable} from '@angular/core';
import {CartModels} from "../models/Cart.models";
import {ProductCart} from "../models/ProductCart";
import {Product} from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModels = new CartModels([], 0, 0, new Date());

  constructor() {
  }

  addToCart(productCart: ProductCart) {
    this.cart.products.push(productCart);
    this.cart.total += productCart.price * productCart.quantity;
    this.cart.count++;
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
}
