import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkaduwaGerComponent } from './hikkaduwa-ger.component';

describe('HikkaduwaGerComponent', () => {
  let component: HikkaduwaGerComponent;
  let fixture: ComponentFixture<HikkaduwaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikkaduwaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikkaduwaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
