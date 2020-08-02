import {NgModule} from '@angular/core';
import {SortingModule} from './sorting/sorting.module';
import {DsaRoutingModule} from './dsa-routing.module';
import {PathAlgoModule} from './path-algos/path-algo.module';
import {TestD3Component} from '../../components/test-d3/test-d3.component';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DragableTreeComponent} from '../../components/test-d3/dragable-tree/dragable-tree.component';
import {TreeComponent} from '../../components/test-d3/tree/tree.component';
import {TreeTemplateComponent} from '../../components/test-d3/tree/tree-template/tree-template.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TestD3Component,
    DragableTreeComponent,
    TreeComponent,
    TreeTemplateComponent,
  ],
  imports: [
    SortingModule,
    PathAlgoModule,
    CommonModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    DsaRoutingModule
  ]
})
export class DsaModule {}
