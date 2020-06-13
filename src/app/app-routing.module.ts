import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopLeftToLowerRightComponent} from './path-algos/top-left-to-lower-right/top-left-to-lower-right.component';
import {PathAlgoComponent} from './path-algos/path-algo/path-algo.component';


const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
