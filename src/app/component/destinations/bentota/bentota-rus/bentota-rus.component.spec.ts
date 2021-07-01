import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentotaRusComponent } from './bentota-rus.component';

describe('BentotaRusComponent', () => {
  let component: BentotaRusComponent;
  let fixture: ComponentFixture<BentotaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BentotaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BentotaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
