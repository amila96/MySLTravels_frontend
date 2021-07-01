import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkaduwaRusComponent } from './hikkaduwa-rus.component';

describe('HikkaduwaRusComponent', () => {
  let component: HikkaduwaRusComponent;
  let fixture: ComponentFixture<HikkaduwaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikkaduwaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikkaduwaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
