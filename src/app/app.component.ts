import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.models';
const gamesData = import('./ressources/data/games.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products!: Product[];

  async ngOnInit() {
    this.products = await this.DeserializePromise()
    
  }

  async DeserializePromise(){
    var games = new Array();

    await Promise.resolve(gamesData).then((v) => {
        for (const value in v) {
          if(!isNaN(parseInt(value))){
            games.push(v[value])
          }
        }
      }
    )
    return games
  }
}


