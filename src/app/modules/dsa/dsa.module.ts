import {NgModule} from '@angular/core';
import {SortingModule} from './sorting/sorting.module';
import {PathAlgoModule} from './path-algos/path-algo.module';
import {TestD3Component} from '../../components/test-d3/test-d3.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [TestD3Component],
  imports: [
    SortingModule,
    PathAlgoModule,
    CommonModule
  ]
})
export class DsaModule {}
