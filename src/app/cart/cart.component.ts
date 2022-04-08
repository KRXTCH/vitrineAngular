import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/Cart.service";
import {Product} from "../models/product.models";
import {ProductCart} from "../models/ProductCart";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity: number = 1;


  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }
  
  get cartItems() {
    return this.cartService.getCart();
  }

  removeItem(item: ProductCart) {
    this.cartService.removeFromCart(item);
  }

  changeQuantity(item: ProductCart, quantity: number) {
    this.cartService.changeQuantity(item, quantity);
    console.log(item.totalPrice)
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
}
