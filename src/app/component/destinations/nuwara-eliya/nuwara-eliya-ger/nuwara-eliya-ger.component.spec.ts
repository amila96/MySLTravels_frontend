import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaraEliyaGerComponent } from './nuwara-eliya-ger.component';

describe('NuwaraEliyaGerComponent', () => {
  let component: NuwaraEliyaGerComponent;
  let fixture: ComponentFixture<NuwaraEliyaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuwaraEliyaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuwaraEliyaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
