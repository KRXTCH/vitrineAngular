import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  search : string = "";
  
  constructor(private productsService: ProductsService){ }

  ngOnInit(): void {
  }

  OnNameSelectorChange(event: Event){
    this.productsService.setNameOrderBy( (event.target as HTMLTextAreaElement).value)
  }

  OnDateSelectorChange(event: Event){
    this.productsService.setDateOrderBy((event.target as HTMLTextAreaElement).value)
  }

}
