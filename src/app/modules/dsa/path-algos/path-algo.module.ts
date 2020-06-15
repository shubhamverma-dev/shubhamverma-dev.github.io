import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {PathAlgoComponent} from '../../../components/path-algos/path-algo/path-algo.component';
import {TopLeftToLowerRightComponent} from '../../../components/path-algos/top-left-to-lower-right/top-left-to-lower-right.component';
import {PathAlgoRoutingModule} from './path-algo-routing.module';

@NgModule({
  declarations: [
    PathAlgoComponent,
    TopLeftToLowerRightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    PathAlgoRoutingModule
  ]
})
export class PathAlgoModule {
}
