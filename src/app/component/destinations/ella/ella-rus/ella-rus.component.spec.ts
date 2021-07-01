import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllaRusComponent } from './ella-rus.component';

describe('EllaRusComponent', () => {
  let component: EllaRusComponent;
  let fixture: ComponentFixture<EllaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
