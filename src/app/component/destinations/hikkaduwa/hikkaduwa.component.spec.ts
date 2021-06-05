import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkaduwaComponent } from './hikkaduwa.component';

describe('HikkaduwaComponent', () => {
  let component: HikkaduwaComponent;
  let fixture: ComponentFixture<HikkaduwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikkaduwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikkaduwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
