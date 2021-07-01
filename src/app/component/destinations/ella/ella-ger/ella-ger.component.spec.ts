import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllaGerComponent } from './ella-ger.component';

describe('EllaGerComponent', () => {
  let component: EllaGerComponent;
  let fixture: ComponentFixture<EllaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
