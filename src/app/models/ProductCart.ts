import {Product} from "./product.models";

export class ProductCart {
    constructor(
        public product: Product,
        public quantity: number,
    ) {}
}
