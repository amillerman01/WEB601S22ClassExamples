import { Component } from '@angular/core';
import { Content } from "./content";
import { ContentList } from "./content-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<h1 class="heading-class-separate">New heading!</h1>';
  name: string; // this variable will now always be a string
  tertiaryName = 'Alex'; // this variable will ALSO now always be a string

  individualContentItem: Content;
  secondContentItem: Content;

  listOfContent?: ContentList;

  readonly valueCannotChange: number;

  constructor() {

    this.name = 'Peter';

    let secondaryName: string;
    secondaryName = 'Andrew';

    this.valueCannotChange = 0;
    for (let i = 0; i < 1000; i++) {
      this.valueCannotChange++;
    }

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

    // can't do this because it's readonly now
    // can't do this because you need to replace the entire object in order to replace the id in the constructor
    // this.individualContentItem.id = 1;


    // you can however replace the whole object while you're in the constructor
    this.individualContentItem = {
      id: 1,
      type: "Platformer",
      imageUrl: "https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/ncom/en_US/games/switch/s/super-mario-odyssey-switch/Video/posters/Super_Mario_Odyssey_Accolades_Trailer",
      body: "Very good platformer on the Nintendo Switch",
      name: "Mario Odyssey"
    };


    this.secondContentItem = {
      id: 50,
      type: "Platformer",
      // don't need to specify a value for imageUrl because it's not optional
      body: undefined,
      name: "Kirby Mew game"
    };


    this.listOfContent = new ContentList(this.individualContentItem);
    console.log("View the array of items in the list: ", this.listOfContent.items);
    console.log("The count of the list is: ", ContentList.contentCount);

    this.processContent(this.individualContentItem);
    this.processContent(this.secondContentItem);

    console.log("Separating my optional test")
    this.processContentOptionally(this.individualContentItem);
    this.processContentOptionally();

  }

  updateName(): void {
    this.name = "Andrew";
  }

  processContent(contentItem: Content): void {
    console.log("Content item id: ", contentItem.id);
    console.log("Content body: " + contentItem.body,
      "Content body without tostring invoked: ", contentItem.body)
    // cannot change the value after the constructor set it
    // this.valueCannotChange = 80;

  }
  processContentOptionally(contentItem?: Content): void {
    // console.log("Content item id: ", contentItem.id); // can't access undefined.id
    console.log("Content item id: ", contentItem?.id); // if contentItem is set, we access the id, otherwise we don't
    if (contentItem) {
      console.log("Content body: " + contentItem.body,
        "Content body without tostring invoked: ", contentItem.body)
    }
    // cannot change the value after the constructor set it
    // this.valueCannotChange = 80;

  }

}
