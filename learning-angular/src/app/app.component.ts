import { Component } from '@angular/core';
import { Content } from "./content";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<h1>New heading!</h1>';
  name: string; // this variable will now always be a string
  tertiaryName = 'Alex'; // this variable will ALSO now always be a string

  individualContentItem: Content;

  constructor() {

    this.name = 'Peter';

    let secondaryName: string;
    secondaryName = 'Andrew';

    // can't do this because tertiaryName is a string type
    // this.tertiaryName = 1;

    this.updateName();

    this.individualContentItem = {
      id: 0,
      type: "Platformer",
      imageUrl: "https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/ncom/en_US/games/switch/s/super-mario-odyssey-switch/Video/posters/Super_Mario_Odyssey_Accolades_Trailer",
      body: "Very good platformer on the Nintendo Switch",
      name: "Mario Odyssey"
    };
  }

  updateName(): void{
    this.name = "Andrew";
  }
}
