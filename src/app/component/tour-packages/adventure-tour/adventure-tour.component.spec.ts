import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureTourComponent } from './adventure-tour.component';

describe('AdventureTourComponent', () => {
  let component: AdventureTourComponent;
  let fixture: ComponentFixture<AdventureTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
