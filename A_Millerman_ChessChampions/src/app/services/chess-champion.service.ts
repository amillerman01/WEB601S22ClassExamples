import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHESSCHAMPIONS, DEFAULTCHESSCONTENT } from '../data/mock-chess-champions';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChessChampionService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CHESSCHAMPIONS);
  }

  /**
   * Returns a single content item at a specified id
   * @param id
   * @returns
   */
  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < CHESSCHAMPIONS.length; i++) // iterate through each chess champion
    {
      if (CHESSCHAMPIONS[i].id === id) { // found the item
        return of(CHESSCHAMPIONS[i]);
      }
    }
    return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
  }

  addContentItem(newContentItem: Content): Observable<Content[]> {
    CHESSCHAMPIONS.push(newContentItem);
    return of(CHESSCHAMPIONS);
  }

}
