import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmyDemoComponent} from './components/smy-demo/smy-demo.component';


const appRoutes: Routes = [{
  path: 'smy-demo',
  component: SmyDemoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
