import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService) {
  }

  ngOnInit() {
    // if a detail links to another detail, OR the user can get to a detail from a detail, we can't use the snapshot
    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.contentService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.contentItem = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });
  }
}
