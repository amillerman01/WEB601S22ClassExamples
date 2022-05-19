import { Component } from '@angular/core';
import { Content } from "./content";
import { ContentList } from "./content-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  individualItem: Content;
  individualItem2: Content;

  constructor() {

    this.individualItem = {
      id: 0,
      name: 'Magnus Carlsen',
      body: "Current world champ",
      imageUrl: "https://i.guim.co.uk/img/media/ad35976aca03db7b6b355111a3dd4e3db687d724/0_136_2048_1229/master/2048.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2b38f880baf6f2edba26b98fdf4420c",
      type: "GM"
    };
    this.individualItem2 = {
      id: 1,
      name: 'Alexandra Botez',
      body: "	Woman FIDE Master",
      imageUrl: "https://images.chesscomfiles.com/uploads/v1/master_player/7064c138-1af7-11eb-b69b-0371950d641f.8e25e027.5000x5000o.6254ebef0621.jpeg",
      type: "FM"
    }

  }
}
