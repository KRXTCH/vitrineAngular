import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product(1, "Elden Ring",
            "Elden Ring for PC is an action role playing game (ARPG) written by superstars George R R Martin (the author of the Song of Ice and Fire series of books which begat television show Game of Thrones) and Hidetaka Miyazake (who is famed for many popular video games: from the Souls series, to Bloodborne, to Sekiro amongst many others).",
            "https://s1.gaming-cdn.com/images/products/4824/271x377/elden-ring-pc-game-steam-europe-cover.jpg",
            new Date("01/05/2019"),
            "https://s1.gaming-cdn.com/img/products/4824/pcover/4824.jpg",
            {"Limited": 72.99, "Colector" : 57.99, "Standard" : 42.99}
            ),
        new Product(2, 
            "Total War: Warhammer III",
            "Total War: WARHAMMER III for PC is a turn-based strategy and real time video game, based on the table game of the same name, and the third in the video game series. Players take turns in moving their pieces/ characters around the map and learn how to best manage their settlements so as to achieve all their aims, defeat their enemies and get along with those they cannot immediately defeat!",
            "https://s3.gaming-cdn.com/images/products/8144/271x377/total-war-warhammer-iii-pc-game-steam-europe-cover.jpg",
            new Date("11/26/2020"),
            "https://s3.gaming-cdn.com/img/products/8144/pcover/8144.jpg",
            {"Limited": 67.99, "Colector" : 52.99, "Standard" : 37.99}
        ),
        new Product(3, "Destiny 2: The Witch Queen",
            "Destiny 2: The Witch Queen is an expansion pack for Destiny 2, the sixth such release. The game is a loot-shooter MMO (massively multiplayer online) game. Following on from the original game, the expansion packs introduce new characters, enhance the roles of supporting characters and take the player to new maps – and this expansion pack is no different.",
            "https://s2.gaming-cdn.com/images/products/9415/271x377/destiny-2-the-witch-queen-pc-game-steam-cover.jpg",
            new Date("02/12/2017"),
            "https://s3.gaming-cdn.com/img/products/1919/pcover/1919.jpg",
            {"Limited": 54.89, "Colector" : 39.89, "Standard" : 24.89}
        ),
        new Product(4, 
            "Martha Is Dead",
            "Martha Is Dead is a dark first-person psychological thriller, set in 1944 Italy, that blurs the lines between reality, superstition and the tragedy of war.",
            "https://s3.gaming-cdn.com/images/products/10220/271x377/martha-is-dead-pc-game-steam-cover.jpg",
            new Date("04/28/2019"),
            "https://s3.gaming-cdn.com/img/products/10220/pcover/10220.jpg",
            {"Limited": 52.49, "Colector" : 28.49, "Standard" : 13.49}
        ),
        new Product(5, "Ready or Not",
            "Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.",
            "https://s3.gaming-cdn.com/images/products/2075/271x377/ready-or-not-early-access-early-access-pc-game-steam-cover.jpg",
            new Date("03/10/2019"),
            "https://s3.gaming-cdn.com/img/products/2075/pcover/2075.jpg",
            {"Limited": 59.99, "Colector" : 45.99, "Standard" : 30.19}
        ),
        new Product(6, 
            "God of War",
            "God of War for PC was teased for months, from about halfway through 2021 until the developers finally put players out of their misery and confirmed the PC release in January 2022! It is the PC-friendly version of the 2018 Gods of War, which was initially only available on PlayStation. The game allows PC gamers to enjoy the intense Norse God action-adventure game.",
            "https://s3.gaming-cdn.com/images/products/7325/271x377/god-of-war-pc-game-steam-cover.jpg",
            new Date("11/20/2021"),
            "https://s3.gaming-cdn.com/img/products/7325/pcover/7325.jpg",
            {"Limited": 62.99, "Colector" : 47.69, "Standard" : 32.69}
        ),
        new Product(7, 
            "Guild Wars 2: End of Dragons",
            "Join the fight for Tyria’s future in Guild Wars 2: End of Dragons. Explore the beautiful Canthan continent, travel and fish with your friends in your own personal skiff, unlock nine new elite specializations, and more!",
            "https://s3.gaming-cdn.com/images/products/7487/271x377/guild-wars-2-end-of-dragons-pc-game-ncsoft-cover.jpg",
            new Date("11/16/2020"),
            "https://s3.gaming-cdn.com/img/products/7487/pcover/7487.jpg",
            {"Limited": 56.99, "Colector" : 39.99, "Standard" : 26.99}
        ),
        new Product(8, 
            "Destiny 2: 30th Anniversary",
            "Celebrate Bungie's 30th Anniversary with a new dungeon, the Gjallarhorn Exotic Rocket Launcher, Thorn armor set, and an arsenal of weapons, gear, and cosmetics inspired by Bungie’s past.",
            "https://s2.gaming-cdn.com/images/products/9427/271x377/destiny-2-bungie-30th-anniversary-pack-dlc-pc-game-steam-cover.jpg",
            new Date("01/17/2021"),
            "https://s3.gaming-cdn.com/img/products/1919/pcover/1919.jpg",
            {"Limited": 44.99, "Colector" : 28.49, "Standard" : 14.49}
        ),
        new Product(9, 
            "Horizon Zero Dawn",
            "Horizon Zero Dawn for PC is an action role playing game in which you control Aloy, a rare human survivor in the 31st century dystopian landscape. Humans may be rare, and access to technology is limited, but there is a large population of unfriendly robotic creatures (who were originally created by Big Tech who then lost control of them).",
            "https://s2.gaming-cdn.com/images/products/6202/271x377/horizon-zero-dawn-complete-edition-pc-game-steam-cover.jpg",
            new Date("05/27/2020"),
            "https://s2.gaming-cdn.com/img/products/6202/pcover/6202.jpg",
            {"Limited": 47.49, "Colector" : 32.49, "Standard" : 17.49}
        )
    ];
    sortNameOrderBy : string = "asc";
    sortDateOrderBy : string = "asc";
    search : string = "";

    setNameOrderBy(value : string){
        this.sortNameOrderBy = value
    }

    setDateOrderBy(value : string){
        this.sortDateOrderBy = value
    }

    getOneProduct(id: number) {
        return this.products.find((p) => p.id === id);
    }
}

