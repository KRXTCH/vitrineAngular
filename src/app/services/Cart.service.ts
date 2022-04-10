import {Injectable} from '@angular/core';
import {CartModels} from "../models/Cart.models";
import {ProductCart} from "../models/ProductCart";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.models";

const editions = {
  Collector : "Collector",
  Limited : "Limited",
  Standard : "Standard",
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModels = new CartModels([], 0, 0, new Date());
  previousQuantity: number = 1;
  loaclCart: Array<any> = []

  constructor(private http: HttpClient) {
  }

  addToCart(productCart: ProductCart) {
    this.cart.products.push(productCart);
    this.cart.total += productCart.price * productCart.quantity;
    this.cart.count++;
  }

  addToLocalCart(data: any){
    if(this.isProductInCart(data) === 0){
      this.loaclCart.push(data);
      localStorage.setItem("cart", JSON.stringify(this.loaclCart));
    }
  }

  getFromLocalCart(){
    let parse = JSON.parse(localStorage.getItem("cart") as string);

    console.log('getFromLocalCart', parse);

    if(parse !== null){
      this.loaclCart = parse;
    }

    return parse;
  }

  getProductCount(){
    return this.cart.count;
  }

  getCart() {
    let localCart = this.getFromLocalCart();

    for (let item of localCart) {
      let objectObservable = <Observable<Product>>(this.http.get(`http://localhost:3000/products/${item.id}`));
      objectObservable.subscribe(data => {

        // @ts-ignore
        let price : number = data.editions[item.edition];

        // @ts-ignore
        this.addToCart(new ProductCart(
          data.id,
          data.name,
          data.description,
          data.image,
          price,
          data.date,
          data.cover_img,
          item.edition,
          item.quantity,
        ));
      });
    }


    return this.cart;
  }

  removeFromCart(productCart: ProductCart) {
    this.cart.products.splice(this.cart.products.indexOf(productCart), 1);
    this.cart.total -= productCart.price;
    this.cart.count--;

    this.removeFromLocalCart(productCart);
  }

  clearCart() {
    this.cart.products = [];
    this.cart.total = 0;
    this.cart.count = 0;
    this.cart.createdAt = new Date();
  }

  updateQuantity(value: any |undefined) {
    console.log(value);
  }

  changeQuantity(productCart: ProductCart, value: number) {
    productCart.quantity = value;

    if (value > this.previousQuantity){
      this.cart.total += productCart.price;
      this.cart.count++;
      this.previousQuantity = value;
    } else if (value < this.previousQuantity){
      this.cart.total -= productCart.price;
      this.cart.count--;
      this.previousQuantity = value;
    }

    this.updateLocalCart(productCart, value);
  }

  getTotalPrice() {

    let localCart = this.getFromLocalCart();
/*
    for (let item of localCart) {
      let objectObservable = <Observable<Product>>(this.http.get(`http://localhost:3000/price?id=${item.id}&quantity=${item.quantity}?edition=${item.edition}`));
      objectObservable.subscribe(data => {
        console.log('item', item);
        console.log('data', data);

        // @ts-ignore
        console.log('price', data.editions[item.edition]);
        // @ts-ignore
        let price: number = data.editions[item.edition];
        console.log('price', price);
      });
    }*/
    return this.cart.total;
  }

  isProductInCart(data : any){
    if(this.loaclCart === null){
      this.loaclCart = JSON.parse(localStorage.getItem("cart") as string);
    }
    return this.loaclCart.filter( e => e.id === data.id && e.edition === data.edition).length;
  }

  private removeFromLocalCart(productCart: ProductCart) {
    this.loaclCart.splice(this.loaclCart.indexOf(productCart), 1);
    localStorage.setItem("cart", JSON.stringify(this.loaclCart));
  }

  private updateLocalCart(productCart: ProductCart, value: number) {
    this.loaclCart.splice(this.loaclCart.indexOf(productCart), 1);
    this.loaclCart.push({
      id: productCart.id,
      edition: productCart.edition,
      quantity: value
    });
    localStorage.setItem("cart", JSON.stringify(this.loaclCart));
  }
}
