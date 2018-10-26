import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzhuRouteComponent } from './fuzhu-route.component';

describe('FuzhuRouteComponent', () => {
  let component: FuzhuRouteComponent;
  let fixture: ComponentFixture<FuzhuRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzhuRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzhuRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
