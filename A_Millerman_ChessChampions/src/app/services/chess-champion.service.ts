import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHESSCHAMPIONS } from '../data/mock-chess-champions';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ChessChampionService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CHESSCHAMPIONS);
  }
}
