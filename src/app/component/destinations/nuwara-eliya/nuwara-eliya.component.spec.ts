import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaraEliyaComponent } from './nuwara-eliya.component';

describe('NuwaraEliyaComponent', () => {
  let component: NuwaraEliyaComponent;
  let fixture: ComponentFixture<NuwaraEliyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuwaraEliyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuwaraEliyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
