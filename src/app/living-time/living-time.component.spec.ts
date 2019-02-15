import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingTimeComponent } from './living-time.component';

describe('LivingTimeComponent', () => {
  let component: LivingTimeComponent;
  let fixture: ComponentFixture<LivingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
