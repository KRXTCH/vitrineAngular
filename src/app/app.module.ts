import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SortByNamePipe } from './sort-by-name.pipe';
import { SortByDatePipe } from './sort-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderReviewComponent } from './order-review/order-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    AppHeaderComponent,
    SortByNamePipe,
    SortByDatePipe,
    SearchPipe,
    FooterComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CartComponent,
    OrderReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
