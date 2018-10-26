import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFirstComponent } from './common-first.component';

describe('CommonFirstComponent', () => {
  let component: CommonFirstComponent;
  let fixture: ComponentFixture<CommonFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
