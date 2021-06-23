import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeTourComponent } from './wildlife-tour.component';

describe('WildlifeTourComponent', () => {
  let component: WildlifeTourComponent;
  let fixture: ComponentFixture<WildlifeTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlifeTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
