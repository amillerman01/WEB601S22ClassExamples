import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../content';
import { CHESSPLAYERS } from '../data/mock-content-db';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const chess: Content[] = CHESSPLAYERS;
    return {
      chess: chess
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id)) + 1 : 0;
  }
}
