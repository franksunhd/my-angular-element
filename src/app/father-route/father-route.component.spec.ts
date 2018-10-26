import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherRouteComponent } from './father-route.component';

describe('FatherRouteComponent', () => {
  let component: FatherRouteComponent;
  let fixture: ComponentFixture<FatherRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
