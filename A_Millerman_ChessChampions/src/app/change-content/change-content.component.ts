import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { ChessChampionService } from '../services/chess-champion.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  newContent: Content;
  constructor(private chessService: ChessChampionService) {
    this.newContent = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {
  }

  addContent(): void {
    console.log("New content I sent the server: ", this.newContent);
    this.chessService.addContentItem(this.newContent).subscribe(newItem => {
      this.newContent = {
        title: '',
        author: ''
      }
      console.log("The content the server gave me back: ", newItem);
    })
  }

}
