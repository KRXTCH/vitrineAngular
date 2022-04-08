import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCart} from "../models/ProductCart";
import {CartService} from "../services/Cart.service";

@Component({
  selector: 'app-cart-quantity-select',
  templateUrl: './cart-quantity-select.component.html',
  styleUrls: ['./cart-quantity-select.component.scss']
})
export class CartQuantitySelectComponent implements OnInit {
  quantity: number = 1;
  @Input() product!: ProductCart;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  changeQuantity(item: ProductCart, quantity: number) {
    this.cartService.changeQuantity(item, quantity);
  }
}
