import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TestD3Component} from '../../components/test-d3/test-d3.component';
import {DragableTreeComponent} from '../../components/test-d3/dragable-tree/dragable-tree.component';
import {TreeComponent} from '../../components/test-d3/tree/tree.component';

@NgModule({
  imports : [RouterModule.forChild([{
    path : 'test-d3',
    component : TestD3Component,
    children: [{
      path: 'dragable-tree',
      component: DragableTreeComponent
    }, {
      path: 'tree',
      component: TreeComponent
    }]
  }])],
  exports: [RouterModule]
})
export class DsaRoutingModule { }
