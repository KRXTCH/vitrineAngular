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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

import {MatSelectModule} from "@angular/material/select";
import { CartQuantitySelectComponent } from './cart-quantity-select/cart-quantity-select.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ProductDetailApiCallComponent } from './product-detail-api-call/product-detail-api-call.component';


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
    CartQuantitySelectComponent,
    HeaderComponent,
    ProductDetailApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
