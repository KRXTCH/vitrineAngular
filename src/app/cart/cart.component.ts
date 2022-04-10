import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/Cart.service";
import {ProductCart} from "../models/ProductCart";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartModels} from "../models/Cart.models";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})export class CartComponent implements OnInit {
  quantity: number = 1;
  cartItem!: CartModels;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  commandID: string = '';

  constructor(private cartService: CartService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.cartItem = this.cartService.getCart();
    console.log(this.cartItem);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get cartItems() {
    return this.cartItem;
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

  onKey($event: KeyboardEvent, input: string) {
    switch (input) {
      case 'firstName':
        this.firstName = ($event.target as HTMLInputElement).value;
        break;
      case 'lastName':
        this.lastName = ($event.target as HTMLInputElement).value;
        break;
      case 'address':
        this.address = ($event.target as HTMLInputElement).value;
        break;
      default:
        break;
    }
  }

  generateCommandId() {
    // generate uid for command
    this.commandID = '_' + Math.random().toString(36).substr(2, 9);
  }
}
