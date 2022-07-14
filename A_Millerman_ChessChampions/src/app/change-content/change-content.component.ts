import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { ChessChampionService } from '../services/chess-champion.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  newContent: Content;
  constructor(private chessService: ChessChampionService,
    private route: ActivatedRoute) {
    this.newContent = {
      title: '',
      author: ''
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id") ?? -1);

      this.newContent.id = id;
      if (this.newContent.id !== -1) {
        this.chessService.getContentItem(this.newContent.id)
          .subscribe((chessPlayerToBeUpdated) => {
            this.newContent = chessPlayerToBeUpdated;
          });
      }
    });
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
  updateContent(): void {
    console.log("Content before I sent the server: ", this.newContent);
    this.chessService.updateContentItem(this.newContent).subscribe(() => {
      this.newContent = {
        title: '',
        author: ''
      }
      console.log("The server updated the content");
    })

  }
}
