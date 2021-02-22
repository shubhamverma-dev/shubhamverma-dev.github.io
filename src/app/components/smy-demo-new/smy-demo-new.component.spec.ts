import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmyDemoNewComponent } from './smy-demo-new.component';

describe('SmyDemoNewComponent', () => {
  let component: SmyDemoNewComponent;
  let fixture: ComponentFixture<SmyDemoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmyDemoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmyDemoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
