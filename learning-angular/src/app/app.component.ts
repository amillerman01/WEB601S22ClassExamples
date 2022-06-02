import { Component } from '@angular/core';
import { Content } from "./content";
import { ContentList } from "./content-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chessPlayers: Content[];

  constructor() {
    // this.chessPlayers = [];
    this.chessPlayers = [{
      id: 0,
      name: 'Magnus Carlsen',
      body: "Current world champ",
      imageUrl: "https://i.guim.co.uk/img/media/ad35976aca03db7b6b355111a3dd4e3db687d724/0_136_2048_1229/master/2048.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2b38f880baf6f2edba26b98fdf4420c",
      type: "GM",
      tags: ["currentChamp", "gofor2900"]
    }, {
      id: 1,
      name: 'Alexandra Botez',
      body: "	Woman FIDE Master",
      imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/7064c138-1af7-11eb-b69b-0371950d641f.8e25e027.5000x5000o.6254ebef0621.jpeg",
      type: "FM",
      tags: ["botezgambit"]
    }, {
      id: 2,
      name: 'Rameshbabu Praggnanandhaa',
      body: "Grandmaster",
      imageUrl: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220222035049-01-praggnanandhaa-chess-portrait-file-2019.jpg",
      tags: ["youngGrandmaster"]
    }, {
      id: 3,
      name: 'Ben Finegold',
      imageUrl: "https://chessdailynews.com/wp-content/uploads/2010/01/Ben-Finegold-4.jpg",
      type: 'GM',
      tags: ["neverplayf3"]
    }];

  }
  addPlayer(): void {
    this.chessPlayers.push({
      id: 4,
      name: 'Hikaru Nikamura',
      imageUrl: "",
      tags: ["becameAYoutuberInstead"]
    });
    this.chessPlayers[0].name = "Not Magnus";
    console.log("The current values in the array", this.chessPlayers);
    this.chessPlayers = [...this.chessPlayers];
  }
}
