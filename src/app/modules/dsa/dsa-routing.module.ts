import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SortingComponent} from '../../sorting-seggregated/sorting/sorting.component';
import {BubbleSortComponent} from '../../sorting-seggregated/bubblesort/bubble-sort.component';
import {InsertionSortComponent} from '../../sorting-seggregated/insertionsort/insertion-sort.component';
import {QuicksortComponent} from '../../sorting-seggregated/quicksort/quicksort.component';
import {PathAlgoComponent} from '../../path-algos/path-algo/path-algo.component';
import {TopLeftToLowerRightComponent} from '../../path-algos/top-left-to-lower-right/top-left-to-lower-right.component';

const dsaRoutes: Routes = [
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
  },{
    path: 'path-algos', component: PathAlgoComponent,
    children: [
      {
        path: 'top-left-to-lower-right',
        component: TopLeftToLowerRightComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dsaRoutes)],
  exports: [RouterModule]
})
export class DsaRoutingModule {}
