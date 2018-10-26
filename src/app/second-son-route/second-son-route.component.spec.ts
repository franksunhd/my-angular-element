import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSonRouteComponent } from './second-son-route.component';

describe('SecondSonRouteComponent', () => {
  let component: SecondSonRouteComponent;
  let fixture: ComponentFixture<SecondSonRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSonRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSonRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
