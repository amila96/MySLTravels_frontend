import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleFortGerComponent } from './galle-fort-ger.component';

describe('GalleFortGerComponent', () => {
  let component: GalleFortGerComponent;
  let fixture: ComponentFixture<GalleFortGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleFortGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleFortGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
