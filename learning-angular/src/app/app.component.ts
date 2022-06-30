import { Component, OnInit } from '@angular/core';
import { Content } from "./content";
import { ContentList } from "./content-list";
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardClasses = ['is-first', 'is-even', 'is-odd'];

  constructor() {
  }

  ngOnInit(): void {

    // this.contentService.updateContentItem({
    //   id: 0,
    //   // add rest of properties for a valid content item
    // }).subscribe(contentList => {
    //   console.log(contentList);
    // })

    // this.contentService.deleteContentItem(1).subscribe(() => { });
  }

}
