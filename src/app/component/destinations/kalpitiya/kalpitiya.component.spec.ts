import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpitiyaComponent } from './kalpitiya.component';

describe('KalpitiyaComponent', () => {
  let component: KalpitiyaComponent;
  let fixture: ComponentFixture<KalpitiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalpitiyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalpitiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
