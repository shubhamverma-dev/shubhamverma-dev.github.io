import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTemplateComponent } from './tree-template.component';

describe('TreeTemplateComponent', () => {
  let component: TreeTemplateComponent;
  let fixture: ComponentFixture<TreeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
