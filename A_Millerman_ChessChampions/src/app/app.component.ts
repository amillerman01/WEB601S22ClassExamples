import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_ChessChampions';
  myList: List;

  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'Magnus Carlsen',
      body: "Current world champ",
      author: "Alex Millerman",
      imageLink: "https://i.guim.co.uk/img/media/ad35976aca03db7b6b355111a3dd4e3db687d724/0_136_2048_1229/master/2048.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2b38f880baf6f2edba26b98fdf4420c",
      type: "GM",
      hashtags: ["younggrandmaster", "thegoat", "gofor2900"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'Alexandra Botez',
      body: "	Woman FIDE Master",
      author: "Alex Millerman",
      imageLink: "https://images.chesscomfiles.com/uploads/v1/master_player/7064c138-1af7-11eb-b69b-0371950d641f.8e25e027.5000x5000o.6254ebef0621.jpeg",
      type: "FM",
      hashtags: ["thebotezgambit"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Rameshbabu Praggnanandhaa',
      body: "Grandmaster",
      author: "Alex Millerman",
      imageLink: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220222035049-01-praggnanandhaa-chess-portrait-file-2019.jpg",
      type: "GM",
      hashtags: ["youngestgrandmaster", "watchoutmagnus"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'Ben Finegold',
      body: "Fide Grandmaster",
      author: "Alex Millerman",
      imageLink: "https://chessdailynews.com/wp-content/uploads/2010/01/Ben-Finegold-4.jpg",
      type: "GM",
      hashtags: ["gmat40", "neverplayf3"]
    };
    this.myList.addContent(contentitem);

  }
}
