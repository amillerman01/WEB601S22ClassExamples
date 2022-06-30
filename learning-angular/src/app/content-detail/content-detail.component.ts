import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../content';
import { ChessPlayerTitle } from '../enums/chess-player-title';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  contentItem?: Content;
  ChessPlayerTitleENUMValues = ChessPlayerTitle;

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.contentService.getContentItem(this.id).subscribe(singleItem => {
      this.contentItem = singleItem;
    })
  }
}
