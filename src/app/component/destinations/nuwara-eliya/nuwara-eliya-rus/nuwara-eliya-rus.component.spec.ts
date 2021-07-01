import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaraEliyaRusComponent } from './nuwara-eliya-rus.component';

describe('NuwaraEliyaRusComponent', () => {
  let component: NuwaraEliyaRusComponent;
  let fixture: ComponentFixture<NuwaraEliyaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuwaraEliyaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuwaraEliyaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
