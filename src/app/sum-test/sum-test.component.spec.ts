import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumTestComponent } from './sum-test.component';

describe('SumTestComponent', () => {
  let component: SumTestComponent;
  let fixture: ComponentFixture<SumTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
