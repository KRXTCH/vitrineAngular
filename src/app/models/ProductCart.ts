import {Product} from "./product.models";

export class ProductCart {
    constructor(
        public product: Product,
        public quantity: number,
    ) {}

  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
