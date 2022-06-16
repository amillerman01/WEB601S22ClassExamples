import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { ChessChampionService } from '../services/chess-champion.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  chessPlayersList: Content[];
  hikaru: Content = {
    id: 100,
    title: 'Hikaru Nakamura',
    body: "A chess champion who became a successful youtuber instead",
    author: "Alex Millerman",
    type: "GM",
    hashtags: ["supergm", "indepthanalysis"]
  }
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private chessChampionService: ChessChampionService) {
    this.chessPlayersList = [];

  }

  ngOnInit(): void {
    // getContent test
    this.chessChampionService.getContent().subscribe(chessChampionsArray =>
      this.chessPlayersList = chessChampionsArray);

    // getContentItem test - worked
    // this.chessChampionService.getContentItem(1).subscribe(chessChampionsSingleItem => {
    //   console.log("Got the content item: ", chessChampionsSingleItem);
    // });

    // addContentItem test
    this.chessChampionService.addContentItem(this.hikaru).subscribe(chessChampionsArray => {
      console.log("Added Hikaru: ", chessChampionsArray);
    });

    // updateContentItem test
    // this.chessChampionService.getContent().subscribe(chessChampionsArray =>
    //   this.chessPlayersList = chessChampionsArray);

    // deleteContentItem test
    // this.chessChampionService.getContent().subscribe(chessChampionsArray =>
    //   this.chessPlayersList = chessChampionsArray);
  }

  checkForAuthorInList(authorNameValue: string): void {
    if (this.chessPlayersList.some(player => player.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
