import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSecondComponent } from './common-second.component';

describe('CommonSecondComponent', () => {
  let component: CommonSecondComponent;
  let fixture: ComponentFixture<CommonSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
