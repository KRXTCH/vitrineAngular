import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter()
  @Output() onChangeName = new EventEmitter()
  @Output() onChangeDate = new EventEmitter()

  search : string = ""
  dateSort: string = ""
  nameSort: string = ""

  constructor(){
  }

  ngOnInit(): void {
  }

  searchThis(data : Event){
    this.onSearch.emit(data);
  }

  OnNameSelectorChange(data: Event){
    this.onChangeName.emit((data.target as HTMLTextAreaElement).value);
  }

  OnDateSelectorChange(data : Event){
    this.onChangeDate.emit((data.target as HTMLTextAreaElement).value);
  }
}
