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
    // if there aren't some chess champions with the same id number, push the array item
    if (!CHESSCHAMPIONS.some(chessPlayer => chessPlayer.id === newContentItem.id)) {
      CHESSCHAMPIONS.push(newContentItem);
    }
    return of(CHESSCHAMPIONS);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in chesschampions with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating

    CHESSCHAMPIONS.forEach((individualChessChampion, index) => {
      // one potential solution
      // if (individualChessChampion.id === newContentItem.id) // found them
      // {
      //   individualChessChampion.title = newContentItem.title;
      //   individualChessChampion.body = newContentItem.body;
      //   individualChessChampion.author = newContentItem.author;
      //   individualChessChampion.imageLink = newContentItem.imageLink;
      //   individualChessChampion.type = newContentItem.type;
      //   individualChessChampion.hashtags = newContentItem.hashtags;
      //   // return;
      // }

      if (individualChessChampion.id === newContentItem.id) // found them
      {
        console.log("Trying method 2");
        CHESSCHAMPIONS[index] = newContentItem;
        // return;
      }
    });

    return of(CHESSCHAMPIONS);
  }

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < CHESSCHAMPIONS.length; i++) // iterate through each chess champion
    {
      if (CHESSCHAMPIONS[i].id === id) { // found the item
        // delete it from the array first
        CHESSCHAMPIONS.splice(i, 1);
        console.log("Deleted the item: ", CHESSCHAMPIONS);
        return of(CHESSCHAMPIONS[i]);
      }
    }
    return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
  }
}
