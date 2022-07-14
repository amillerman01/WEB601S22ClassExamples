import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { CHESSCHAMPIONS } from '../data/mock-chess-champions';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // setting it to the value of our array of content
    const champions: Content[] = CHESSCHAMPIONS;
    return { champions };
  }
  genId(champions: Content[]): number {
    return champions.length > 0 ? Math.max(...champions.map(c => c.id || 0)) + 1 : 0;
  }
}
