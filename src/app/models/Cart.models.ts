import {Product} from "./product.models";
import {ProductCart} from "./ProductCart";

export class CartModels {
  constructor(
    public products: ProductCart[],
    public count: number,
    public total: number,
    public createdAt: Date,
  ) {}
}
