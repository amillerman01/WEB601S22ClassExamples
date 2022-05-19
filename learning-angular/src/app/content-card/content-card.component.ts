import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  // template: "<h1>html right here isntead</h1>",
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentItem?: Content;
  contentItem2?: Content;

  constructor() {
  }

  ngOnInit(): void {
    this.contentItem = {
      id: 0,
      name: 'Magnus Carlsen',
      body: "Current world champ",
      imageUrl: "https://i.guim.co.uk/img/media/ad35976aca03db7b6b355111a3dd4e3db687d724/0_136_2048_1229/master/2048.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2b38f880baf6f2edba26b98fdf4420c",
      type: "GM"
    };

    if (this.contentItem2) {
      console.log(this.contentItem2.name);
    }
  }

}
