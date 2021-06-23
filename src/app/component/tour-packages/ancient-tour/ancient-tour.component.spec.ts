import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientTourComponent } from './ancient-tour.component';

describe('AncientTourComponent', () => {
  let component: AncientTourComponent;
  let fixture: ComponentFixture<AncientTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncientTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncientTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
