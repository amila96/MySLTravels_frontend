import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureTourComponent } from './nature-tour.component';

describe('NatureTourComponent', () => {
  let component: NatureTourComponent;
  let fixture: ComponentFixture<NatureTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
