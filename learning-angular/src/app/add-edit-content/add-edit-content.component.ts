import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.scss']
})
export class AddEditContentComponent implements OnInit {
  contentItem: Content = {
    name: "",
    body: ""
  };
  tempTags: string = '';
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }
  addContentToServer(): void {
    this.contentItem.tags = this.tempTags.split(", ");
    this.contentService.addContentItem(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }

}
