import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
 @Output() onSearch = new EventEmitter()
 search : string = ""

 searchThis(){
   this.onSearch.emit(this.search)
 }
  
  constructor(private productsService: ProductsService){ 
  }

  ngOnInit(): void {
    this.onSearch.emit(this.productsService.search)
  }

  OnNameSelectorChange(event: Event){
    this.productsService.setNameOrderBy( (event.target as HTMLTextAreaElement).value)
  }

  OnDateSelectorChange(event: Event){
    this.productsService.setDateOrderBy((event.target as HTMLTextAreaElement).value)
  }

}
