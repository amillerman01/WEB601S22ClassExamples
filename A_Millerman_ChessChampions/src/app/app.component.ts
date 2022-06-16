import { Component } from '@angular/core';
import { Content } from './models/content';
import { ChessChampionService } from './services/chess-champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_ChessChampions';

  constructor(private chessChampionService: ChessChampionService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.chessChampionService.getContentItem(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
    });

  }
}
