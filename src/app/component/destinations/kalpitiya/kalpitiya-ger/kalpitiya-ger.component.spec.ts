import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpitiyaGerComponent } from './kalpitiya-ger.component';

describe('KalpitiyaGerComponent', () => {
  let component: KalpitiyaGerComponent;
  let fixture: ComponentFixture<KalpitiyaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalpitiyaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalpitiyaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
