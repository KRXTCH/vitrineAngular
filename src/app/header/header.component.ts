import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  search: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  searchThis() {
    this.onSearch.emit(this.search);

    if(window.location.href != "http://localhost:4200/"){
      this.router.navigate(['']);
    }
  }
}
