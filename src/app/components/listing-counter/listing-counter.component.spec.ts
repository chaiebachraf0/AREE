import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCounterComponent } from './listing-counter.component';

describe('ListingCounterComponent', () => {
  let component: ListingCounterComponent;
  let fixture: ComponentFixture<ListingCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
