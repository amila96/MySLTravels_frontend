import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentotaGerComponent } from './bentota-ger.component';

describe('BentotaGerComponent', () => {
  let component: BentotaGerComponent;
  let fixture: ComponentFixture<BentotaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BentotaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BentotaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
