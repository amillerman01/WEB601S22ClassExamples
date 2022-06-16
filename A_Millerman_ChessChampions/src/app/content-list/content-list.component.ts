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
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private chessChampionService: ChessChampionService) {
    this.chessPlayersList = [];

  }

  ngOnInit(): void {
    // this.chessPlayersList = this.chessChampionService.getContent();

    this.chessChampionService.getContent().subscribe(chessChampionsArray =>
      this.chessPlayersList = chessChampionsArray);
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
