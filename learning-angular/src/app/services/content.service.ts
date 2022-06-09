import { Injectable } from '@angular/core';
import { Content } from '../content';
import { CHESSPLAYERS } from '../data/mock-content-db';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CHESSPLAYERS);
  }

  // C
  // addContentItem(newContent: Content): Observable<Content> {
  //   return
  // }

  // R
  // getContentItem(id: number): Observable<Content> {
  //   // return ;
  // }

  // U
  // updateContentItem(newContent: Content): Observable<Content[]> {
  //   return
  // }

  // D
  deleteContentItem(newContent: Content): Observable<undefined> {
    // display that it's processing
    // delete the item
    return of(); // send back observable so the component can subscribe to it and know it worked
  }
}
