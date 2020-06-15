import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SortingComponent} from '../../../components/sorting-seggregated/sorting/sorting.component';
import {BubbleSortComponent} from '../../../components/sorting-seggregated/bubblesort/bubble-sort.component';
import {InsertionSortComponent} from '../../../components/sorting-seggregated/insertionsort/insertion-sort.component';
import {QuicksortComponent} from '../../../components/sorting-seggregated/quicksort/quicksort.component';

const sortRoutes: Routes = [
  {
    path: 'sorting',
    component: SortingComponent,
    children : [
      {
        path: 'bubble',
        component: BubbleSortComponent
      }, {
        path: 'insertion',
        component: InsertionSortComponent
      }, {
        path: 'quick',
        component: QuicksortComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(sortRoutes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {
}
