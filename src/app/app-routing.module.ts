import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmyDemoComponent} from './components/smy-demo/smy-demo.component';
import {SmyDemoNewComponent} from './components/smy-demo-new/smy-demo-new.component';


const appRoutes: Routes = [{
  path: 'smy-demo',
  component: SmyDemoComponent
},{
  path : 'smy-demo-new',
  component: SmyDemoNewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
