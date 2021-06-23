import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureTourComponent } from './culture-tour.component';

describe('CultureTourComponent', () => {
  let component: CultureTourComponent;
  let fixture: ComponentFixture<CultureTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
