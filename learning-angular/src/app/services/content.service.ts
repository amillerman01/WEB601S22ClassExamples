import { Injectable } from '@angular/core';
import { Content } from '../content';
import { CHESSPLAYERS } from '../data/mock-content-db';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return CHESSPLAYERS;
  }

  // getContentItem(id: number): Content {
  //   // return ;
  // }
  addContentItem(newContent: Content) {

  }
}
