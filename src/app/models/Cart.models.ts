import {Product} from "./product.models";

export class CartModels {
  constructor(
    public products: Product[],
    public count: number,
    public total: number,
    public createdAt: Date,
  ) {}
}
