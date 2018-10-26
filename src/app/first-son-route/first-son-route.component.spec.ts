import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSonRouteComponent } from './first-son-route.component';

describe('FirstSonRouteComponent', () => {
  let component: FirstSonRouteComponent;
  let fixture: ComponentFixture<FirstSonRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSonRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSonRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
