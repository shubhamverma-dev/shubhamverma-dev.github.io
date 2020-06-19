import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableTreeComponent } from './dragable-tree.component';

describe('DragableTreeComponent', () => {
  let component: DragableTreeComponent;
  let fixture: ComponentFixture<DragableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
