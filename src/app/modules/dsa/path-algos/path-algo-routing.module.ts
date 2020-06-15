import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PathAlgoComponent} from '../../../components/path-algos/path-algo/path-algo.component';
import {TopLeftToLowerRightComponent} from '../../../components/path-algos/top-left-to-lower-right/top-left-to-lower-right.component';

const pathAlgoRoutes: Routes = [
  {
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
  imports: [RouterModule.forChild(pathAlgoRoutes)],
  exports: [RouterModule]
})
export class PathAlgoRoutingModule { }
