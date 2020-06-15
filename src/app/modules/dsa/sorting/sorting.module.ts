import {NgModule} from '@angular/core';
import {InsertionSortComponent} from '../../../components/sorting-seggregated/insertionsort/insertion-sort.component';
import {BubbleSortComponent} from '../../../components/sorting-seggregated/bubblesort/bubble-sort.component';
import {QuicksortComponent} from '../../../components/sorting-seggregated/quicksort/quicksort.component';
import {SortingComponent} from '../../../components/sorting-seggregated/sorting/sorting.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SortingRoutingModule} from './sorting-routing.module';

@NgModule({
  declarations : [
    InsertionSortComponent,
    BubbleSortComponent,
    QuicksortComponent,
    SortingComponent,
  ],
  imports : [
    BrowserModule,
    FormsModule,
    ChartsModule,
    SortingRoutingModule
  ]
})
export class SortingModule { }
