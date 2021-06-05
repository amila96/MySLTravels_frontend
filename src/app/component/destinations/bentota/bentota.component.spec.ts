import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentotaComponent } from './bentota.component';

describe('BentotaComponent', () => {
  let component: BentotaComponent;
  let fixture: ComponentFixture<BentotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BentotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BentotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
