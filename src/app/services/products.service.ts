import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product("Elden Ring",
            "Elden Ring for PC is an action role playing game (ARPG) written by superstars George R R Martin (the author of the Song of Ice and Fire series of books which begat television show Game of Thrones) and Hidetaka Miyazake (who is famed for many popular video games: from the Souls series, to Bloodborne, to Sekiro amongst many others).",
            "https://s1.gaming-cdn.com/images/products/4824/271x377/elden-ring-pc-game-steam-europe-cover.jpg",
            42.99,
            new Date("01/05/2019")),
        new Product(
            "Total War: Warhammer III",
            "Total War: WARHAMMER III for PC is a turn-based strategy and real time video game, based on the table game of the same name, and the third in the video game series. Players take turns in moving their pieces/ characters around the map and learn how to best manage their settlements so as to achieve all their aims, defeat their enemies and get along with those they cannot immediately defeat!",
            "https://s3.gaming-cdn.com/images/products/8144/271x377/total-war-warhammer-iii-pc-game-steam-europe-cover.jpg",
            37.99,
            new Date("11/26/2020")
        ),
        new Product("Destiny 2: The Witch Queen",
            "Destiny 2: The Witch Queen is an expansion pack for Destiny 2, the sixth such release. The game is a loot-shooter MMO (massively multiplayer online) game. Following on from the original game, the expansion packs introduce new characters, enhance the roles of supporting characters and take the player to new maps – and this expansion pack is no different.",
            "https://s2.gaming-cdn.com/images/products/9415/271x377/destiny-2-the-witch-queen-pc-game-steam-cover.jpg",
            24.89,
            new Date("02/12/2017")
        ),
        new Product(
            "Martha Is Dead",
            "Martha Is Dead is a dark first-person psychological thriller, set in 1944 Italy, that blurs the lines between reality, superstition and the tragedy of war.",
            "https://s3.gaming-cdn.com/images/products/10220/271x377/martha-is-dead-pc-game-steam-cover.jpg",
            13.49,
            new Date("04/28/2019")
        ),
        new Product("Ready or Not",
            "Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.",
            "https://s3.gaming-cdn.com/images/products/2075/271x377/ready-or-not-early-access-early-access-pc-game-steam-cover.jpg",
            30.19,
            new Date("03/10/2019")
        ),
        new Product(
            "God of War",
            "God of War for PC was teased for months, from about halfway through 2021 until the developers finally put players out of their misery and confirmed the PC release in January 2022! It is the PC-friendly version of the 2018 Gods of War, which was initially only available on PlayStation. The game allows PC gamers to enjoy the intense Norse God action-adventure game.",
            "https://s3.gaming-cdn.com/images/products/7325/271x377/god-of-war-pc-game-steam-cover.jpg",
            32.69,
            new Date("11/20/2021")
        ),
        new Product(
            "Guild Wars 2: End of Dragons",
            "Join the fight for Tyria’s future in Guild Wars 2: End of Dragons. Explore the beautiful Canthan continent, travel and fish with your friends in your own personal skiff, unlock nine new elite specializations, and more!",
            "https://s3.gaming-cdn.com/images/products/7487/271x377/guild-wars-2-end-of-dragons-pc-game-ncsoft-cover.jpg",
            26.99,
            new Date("11/16/2020")
        ),
        new Product(
            "Destiny 2: 30th Anniversary",
            "Celebrate Bungie's 30th Anniversary with a new dungeon, the Gjallarhorn Exotic Rocket Launcher, Thorn armor set, and an arsenal of weapons, gear, and cosmetics inspired by Bungie’s past.",
            "https://s2.gaming-cdn.com/images/products/9427/271x377/destiny-2-bungie-30th-anniversary-pack-dlc-pc-game-steam-cover.jpg",
            14.49,
            new Date("01/17/2021")
        ),
        new Product(
            "Horizon Zero Dawn",
            "Horizon Zero Dawn for PC is an action role playing game in which you control Aloy, a rare human survivor in the 31st century dystopian landscape. Humans may be rare, and access to technology is limited, but there is a large population of unfriendly robotic creatures (who were originally created by Big Tech who then lost control of them).",
            "https://s2.gaming-cdn.com/images/products/6202/271x377/horizon-zero-dawn-complete-edition-pc-game-steam-cover.jpg",
            17.49,
            new Date("05/27/2020")
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
}

