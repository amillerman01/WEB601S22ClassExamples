import { Component, OnInit } from '@angular/core';
import { DEFAULTCHESSCONTENT } from '../data/mock-chess-champions';
import { Content } from '../models/content';
import { ChessChampionService } from '../services/chess-champion.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {
  individualPlayer: Content = DEFAULTCHESSCONTENT;

  constructor(private chessChampionService: ChessChampionService) { }

  ngOnInit(): void {
    // getContentItem test
    this.chessChampionService.getContentItem(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });
  }

  checkForIdInList(idValue: string): void {
    this.chessChampionService.getContentItem(Number(idValue)).subscribe(chessChampionsSingleItem => {

      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });
  }


}
