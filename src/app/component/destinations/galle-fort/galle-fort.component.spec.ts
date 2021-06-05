import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleFortComponent } from './galle-fort.component';

describe('GalleFortComponent', () => {
  let component: GalleFortComponent;
  let fixture: ComponentFixture<GalleFortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleFortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleFortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
