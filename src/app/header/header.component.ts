import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  search: string = '';

  constructor(private productsService: ProductsService, private router: Router) {}

  searchThis() {
    this.onSearch.emit(this.search);

    if(window.location.href != "http://localhost:4200/"){
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.onSearch.emit(this.productsService.search);
  }
}
