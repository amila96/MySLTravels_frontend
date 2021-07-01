import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleFortRusComponent } from './galle-fort-rus.component';

describe('GalleFortRusComponent', () => {
  let component: GalleFortRusComponent;
  let fixture: ComponentFixture<GalleFortRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleFortRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleFortRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
