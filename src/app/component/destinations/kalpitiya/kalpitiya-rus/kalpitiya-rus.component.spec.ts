import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpitiyaRusComponent } from './kalpitiya-rus.component';

describe('KalpitiyaRusComponent', () => {
  let component: KalpitiyaRusComponent;
  let fixture: ComponentFixture<KalpitiyaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalpitiyaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalpitiyaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
