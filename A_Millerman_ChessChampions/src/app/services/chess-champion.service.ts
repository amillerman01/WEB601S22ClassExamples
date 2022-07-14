import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { DEFAULTCHESSCONTENT } from '../data/mock-chess-champions';
import { Content } from '../models/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChessChampionService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/champions");
  }

  /**
   * Returns a single content item at a specified id
   * @param id
   * @returns
   */
  getContentItem(id: number): Observable<Content> {
    // for (var i = 0; i < CHESSCHAMPIONS.length; i++) // iterate through each chess champion
    // {
    //   if (CHESSCHAMPIONS[i].id === id) { // found the item
    //     return of(CHESSCHAMPIONS[i]);
    //   }
    // }
    // return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
    return this.http.get<Content>("api/champions/" + id);
  }

  addContentItem(newContentItem: Content): Observable<Content> {
    // if there aren't some chess champions with the same id number, push the array item
    // if (!CHESSCHAMPIONS.some(chessPlayer => chessPlayer.id === newContentItem.id)) {
    //   CHESSCHAMPIONS.push(newContentItem);
    // }
    return this.http.post<Content>("api/champions", newContentItem, this.httpOptions);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in chesschampions with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating

    // CHESSCHAMPIONS.forEach((individualChessChampion, index) => {
    //   if (individualChessChampion.id === newContentItem.id) // found them
    //   {
    //     console.log("Trying method 2");
    //     CHESSCHAMPIONS[index] = newContentItem;
    //     // return;
    //   }
    // });

    return this.http.put<any>("api/champions", newContentItem, this.httpOptions);
  }

  deleteContentItem(id: number): Observable<any> {

    // for (var i = 0; i < CHESSCHAMPIONS.length; i++) // iterate through each chess champion
    // {
    //   if (CHESSCHAMPIONS[i].id === id) { // found the item
    //     // delete it from the array first
    //     CHESSCHAMPIONS.splice(i, 1);
    //     console.log("Deleted the item: ", CHESSCHAMPIONS);
    //     return of(CHESSCHAMPIONS[i]);
    //   }
    // }
    return this.http.delete("api/champions/" + id); // need to return something if the content isn't there
  }
}
