import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/Cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get cartItems() {
    console.log(this.cartService.getCart());
    return this.cartService.getCart();
  }

}
