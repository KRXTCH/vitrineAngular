import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/Cart.service";
import {Product} from "../models/product.models";
import {ProductCart} from "../models/ProductCart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
    this.cartService.addToCart(new ProductCart(new Product(9,
      "Horizon Zero Dawn",
      "Horizon Zero Dawn for PC is an action role playing game in which you control Aloy, a rare human survivor in the 31st century dystopian landscape. Humans may be rare, and access to technology is limited, but there is a large population of unfriendly robotic creatures (who were originally created by Big Tech who then lost control of them).",
      "https://s2.gaming-cdn.com/images/products/6202/271x377/horizon-zero-dawn-complete-edition-pc-game-steam-cover.jpg",
      17.49,
      new Date("05/27/2020"),
      "https://s2.gaming-cdn.com/img/products/6202/pcover/6202.jpg"
    ), 1));
  }

  ngOnInit(): void {
  }

  get cartItems() {
    console.log(this.cartService.getCart());
    return this.cartService.getCart();
  }

  removeItem(item: ProductCart) {
    this.cartService.removeFromCart(item);
  }
}
