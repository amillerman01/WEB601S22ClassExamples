import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {
  content: Content = {
    id: 4,
    name: 'Hikaru Nikamura',
    imageUrl: "",
    type: "GM",
    tags: ["becameAYoutuberInstead"]
  };
  contentWithNoType: Content = {
    id: 4,
    name: 'Hikaru Nikamura',
    imageUrl: "",
    tags: ["becameAYoutuberInstead"]
  };

  today: Date = new Date();

  someStringValue = "Hello World";
  constructor() { }

  ngOnInit(): void {
  }

}
