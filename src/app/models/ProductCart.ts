import {Product} from "./product.models";

export class ProductCart {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public price: number,
        public date : Date,
        public cover_img : string,
        public edition: string,
        public quantity: number,
    ) {}

  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
