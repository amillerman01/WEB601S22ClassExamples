import { Component, OnInit } from '@angular/core';
import { Content } from "./content";
import { ContentList } from "./content-list";
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  chessPlayers: Content[];
  cardClasses = ['is-first', 'is-even', 'is-odd'];

  constructor(private contentService: ContentService) {
    this.chessPlayers = [];
  }

  ngOnInit(): void {
    this.chessPlayers = this.contentService.getContent();
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
