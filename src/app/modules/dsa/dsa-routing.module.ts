import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TestD3Component} from '../../components/test-d3/test-d3.component';

@NgModule({
  imports : [RouterModule.forChild([{
    path : 'test-d3',
    component : TestD3Component
  }])],
  exports: [RouterModule]
})
export class DsaRoutingModule { }
