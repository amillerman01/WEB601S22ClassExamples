import { Component } from '@angular/core';
import { DEFAULTCHESSCONTENT } from './data/mock-chess-champions';
import { Content } from './models/content';
import { ChessChampionService } from './services/chess-champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Millerman_ChessChampions';

  constructor() { }
}
