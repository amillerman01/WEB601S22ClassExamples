import { Injectable } from '@angular/core';
import { Content } from '../content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return [];
  }

  // getContentItem(id: number): Content {
  //   // return ;
  // }
  addContentItem(newContent: Content) {

  }
}
