import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirissaRusComponent } from './mirissa-rus.component';

describe('MirissaRusComponent', () => {
  let component: MirissaRusComponent;
  let fixture: ComponentFixture<MirissaRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirissaRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirissaRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
