import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  chessPlayers: Content[];

  constructor(private contentService: ContentService) {
    this.chessPlayers = [];
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((contentArrayFromService: Content[]) => {
      this.chessPlayers = contentArrayFromService;
    });
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
