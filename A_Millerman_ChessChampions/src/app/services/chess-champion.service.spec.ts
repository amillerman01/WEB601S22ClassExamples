import { TestBed } from '@angular/core/testing';

import { ChessChampionService } from './chess-champion.service';

describe('ChessChampionService', () => {
  let service: ChessChampionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessChampionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
