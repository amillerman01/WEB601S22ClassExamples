import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardsListComponent } from './basic-cards-list.component';

describe('BasicCardsListComponent', () => {
  let component: BasicCardsListComponent;
  let fixture: ComponentFixture<BasicCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
