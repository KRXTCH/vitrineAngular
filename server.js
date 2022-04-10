//-----------------------------------DATA-------------------------------//
let products = [
  {
    id: 1,
    name: "Elden Ring",
    description:
      "Elden Ring for PC is an action role playing game (ARPG) written by superstars George R R Martin (the author of the Song of Ice and Fire series of books which begat television show Game of Thrones) and Hidetaka Miyazake (who is famed for many popular video games: from the Souls series, to Bloodborne, to Sekiro amongst many others).",
    image:
      "https://s1.gaming-cdn.com/images/products/4824/271x377/elden-ring-pc-game-steam-europe-cover.jpg",
    date: "2019-05-01T13:18:08.141+00:00",
    cover_img: "https://s1.gaming-cdn.com/img/products/4824/pcover/4824.jpg",
    editions: { Limited: 72.99, Collector: 57.99, Standard: 42.99 },
  },
  {
    id: 2,
    name: "Total War: Warhammer III",
    description:
      "Total War: WARHAMMER III for PC is a turn-based strategy and real time video game, based on the table game of the same name, and the third in the video game series. Players take turns in moving their pieces/ characters around the map and learn how to best manage their settlements so as to achieve all their aims, defeat their enemies and get along with those they cannot immediately defeat!",
    image:
      "https://s3.gaming-cdn.com/images/products/8144/271x377/total-war-warhammer-iii-pc-game-steam-europe-cover.jpg",
    date: "2020-26-11T13:18:08.141+00:00",
    cover_img: "https://s1.gaming-cdn.com/img/products/4824/pcover/4824.jpg",
    editions: { Limited: 67.99, Collector: 52.99, Standard: 37.99 },
  },
  {
    id: 3,
    name: "Destiny 2: The Witch Queen",
    description:
      "Destiny 2: The Witch Queen is an expansion pack for Destiny 2, the sixth such release. The game is a loot-shooter MMO (massively multiplayer online) game. Following on from the original game, the expansion packs introduce new characters, enhance the roles of supporting characters and take the player to new maps – and this expansion pack is no different.",
    image:
      "https://s2.gaming-cdn.com/images/products/9415/271x377/destiny-2-the-witch-queen-pc-game-steam-cover.jpg",
    date: "2017-12-02T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/1919/pcover/1919.jpg",
    editions: { Limited: 54.89, Collector: 39.89, Standard: 24.89 },
  },
  {
    id: 4,
    name: "Martha Is Dead",
    description:
      "Martha Is Dead is a dark first-person psychological thriller, set in 1944 Italy, that blurs the lines between reality, superstition and the tragedy of war.",
    image:
      "https://s3.gaming-cdn.com/images/products/10220/271x377/martha-is-dead-pc-game-steam-cover.jpg",
    date: "2019-28-04T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/10220/pcover/10220.jpg",
    editions: { Limited: 52.49, Collector: 28.49, Standard: 13.49 },
  },
  {
    id: 5,
    name: "Ready or Not",
    description:
      "Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.",
    image:
      "https://s3.gaming-cdn.com/images/products/2075/271x377/ready-or-not-early-access-early-access-pc-game-steam-cover.jpg",
    date: "2019-10-03T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/2075/pcover/2075.jpg",
    editions: { Limited: 59.99, Collector: 45.99, Standard: 30.19 },
  },
  {
    id: 6,
    name: "God of War",
    description:
      "God of War for PC was teased for months, from about halfway through 2021 until the developers finally put players out of their misery and confirmed the PC release in January 2022! It is the PC-friendly version of the 2018 Gods of War, which was initially only available on PlayStation. The game allows PC gamers to enjoy the intense Norse God action-adventure game.",
    image:
      "https://s3.gaming-cdn.com/images/products/7325/271x377/god-of-war-pc-game-steam-cover.jpg",
    date: "2021-20-11T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/7325/pcover/7325.jpg",
    editions: { Limited: 62.99, Collector: 47.69, Standard: 32.69 },
  },
  {
    id: 7,
    name: "Guild Wars 2: End of Dragons",
    description:
      "Join the fight for Tyria’s future in Guild Wars 2: End of Dragons. Explore the beautiful Canthan continent, travel and fish with your friends in your own personal skiff, unlock nine new elite specializations, and more!",
    image:
      "https://s3.gaming-cdn.com/images/products/7487/271x377/guild-wars-2-end-of-dragons-pc-game-ncsoft-cover.jpg",
    date: "2020-16-11T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/7487/pcover/7487.jpg",
    editions: { Limited: 56.99, Collector: 39.99, Standard: 26.99 },
  },
  {
    id: 8,
    name: "Destiny 2: 30th Anniversary",
    description:
      "Celebrate Bungie's 30th Anniversary with a new dungeon, the Gjallarhorn Exotic Rocket Launcher, Thorn armor set, and an arsenal of weapons, gear, and cosmetics inspired by Bungie’s past.",
    image:
      "https://s2.gaming-cdn.com/images/products/9427/271x377/destiny-2-bungie-30th-anniversary-pack-dlc-pc-game-steam-cover.jpg",
    date: "2021-17-01T13:18:08.141Z",
    cover_img: "https://s3.gaming-cdn.com/img/products/1919/pcover/1919.jpg",
    editions: { Limited: 44.99, Collector: 28.49, Standard: 14.49 },
  },
  {
    id: 9,
    name: "Horizon Zero Dawn",
    description:
      "Horizon Zero Dawn for PC is an action role playing game in which you control Aloy, a rare human survivor in the 31st century dystopian landscape. Humans may be rare, and access to technology is limited, but there is a large population of unfriendly robotic creatures (who were originally created by Big Tech who then lost control of them).",
    image:
      "https://s2.gaming-cdn.com/images/products/6202/271x377/horizon-zero-dawn-complete-edition-pc-game-steam-cover.jpg",
    date: "2020-27-05T13:18:08.141Z",
    cover_img: "https://s2.gaming-cdn.com/img/products/6202/pcover/6202.jpg",
    editions: { Limited: 47.49, Collector: 32.49, Standard: 17.49 },
  },
];
//----------------------------------DATA-----------------------------//
const editions = {
  COLLECTOR: "Collector",
  LIMITED: "Limited",
  STANDARD: "Standard",
};

const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

const filterById = (iJsonObject, iId) => {
  return iJsonObject.filter((aJsonObject) => {
    return aJsonObject.id == iId;
  })[0];
};

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Listening");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const aProduct = filterById(products, req.params.id);
  if (aProduct) {
    return res.status(200).json(aProduct);
  } else {
    return res.status(404).json({ error: "Not found" });
  }
});

app.get("/price", (req, res) => {
  const aId = req.query.id;
  const aQuantity = req.query.quantity;
  const aEdition = req.query.edition;

  const aProduct = filterById(products, aId);

  if (
    aEdition !== editions.COLLECTOR ||
    aEdition !== editions.LIMITED ||
    aEdition !== editions.STANDARD
  ) {
    return res.status(400).json({ error: "Edition doesn't exist" });
  }
  if (aQuantity < 0) {
    return res.status(400).json({
      error: "Quantity must be positiv t'as cru on te donnait des sous ?",
    });
  }
  if (aProduct) {
    const aPrice = aProduct.editions[aEdition] * aQuantity;
    return res.status(200).json({ price: aPrice });
  } else {
    return res.status(404).json({ error: "Not Found" });
  }
});
