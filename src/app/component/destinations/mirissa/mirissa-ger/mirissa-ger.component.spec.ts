import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirissaGerComponent } from './mirissa-ger.component';

describe('MirissaGerComponent', () => {
  let component: MirissaGerComponent;
  let fixture: ComponentFixture<MirissaGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirissaGerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirissaGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
