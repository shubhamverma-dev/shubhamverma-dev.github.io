import {NgModule} from '@angular/core';
import {InsertionSortComponent} from '../../sorting-seggregated/insertionsort/insertion-sort.component';
import {BubbleSortComponent} from '../../sorting-seggregated/bubblesort/bubble-sort.component';
import {QuicksortComponent} from '../../sorting-seggregated/quicksort/quicksort.component';
import {TopLeftToLowerRightComponent} from '../../path-algos/top-left-to-lower-right/top-left-to-lower-right.component';
import {SortingComponent} from '../../sorting-seggregated/sorting/sorting.component';
import {PathAlgoComponent} from '../../path-algos/path-algo/path-algo.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {DsaRoutingModule} from './dsa-routing.module';


@NgModule({
  declarations: [
    InsertionSortComponent,
    BubbleSortComponent,
    QuicksortComponent,
    TopLeftToLowerRightComponent,
    SortingComponent,
    PathAlgoComponent
  ],
  imports: [
    BrowserModule,
    DsaRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class DsaModule { }
