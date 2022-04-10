import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailApiCallComponent } from './product-detail-api-call/product-detail-api-call.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailApiCallComponent },
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
