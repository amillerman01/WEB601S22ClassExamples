import { Injectable } from '@angular/core';
import { Content } from '../content';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/chess");
  }

  // C
  // addContentItem(newContent: Content): Observable<Content> {
  //   return
  // }

  // R
  getContentItem(id: number): Observable<Content> {
    // return of(CHESSPLAYERS[id]);
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/chess/" + id);
  }

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
