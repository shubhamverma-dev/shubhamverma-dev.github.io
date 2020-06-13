import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftToLowerRightComponent } from './top-left-to-lower-right.component';

describe('UnionFindComponent', () => {
  let component: TopLeftToLowerRightComponent;
  let fixture: ComponentFixture<TopLeftToLowerRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeftToLowerRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftToLowerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
