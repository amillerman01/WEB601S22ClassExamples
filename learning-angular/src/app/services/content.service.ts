import { Injectable } from '@angular/core';
import { Content } from '../content';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/chess");
  }

  // C
  addContentItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/chess", newContent, this.httpOptions)
  }

  // R
  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/chess/" + id);
  }

  // U
  // content item needs to have the id set correctly
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/chess", contentItem, this.httpOptions);
  }

  // D
  deleteContentItem(newContent: Content): Observable<undefined> {
    // display that it's processing
    // delete the item
    return of(); // send back observable so the component can subscribe to it and know it worked
  }
}
