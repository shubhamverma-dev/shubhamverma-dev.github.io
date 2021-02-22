import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmyDemoComponent } from './smy-demo.component';

describe('SmyDemoComponent', () => {
  let component: SmyDemoComponent;
  let fixture: ComponentFixture<SmyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
