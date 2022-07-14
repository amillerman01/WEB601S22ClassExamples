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
    const content: Content[] = CHESSCHAMPIONS;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
}
