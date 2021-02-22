import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DsaModule} from './modules/dsa/dsa.module';
import {DsaRoutingModule} from './modules/dsa/dsa-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeTemplateComponent } from './components/test-d3/tree/tree-template/tree-template.component';
import { SmyDemoComponent } from './components/smy-demo/smy-demo.component';
import { SmyDemoNewComponent } from './components/smy-demo-new/smy-demo-new.component';


@NgModule({
  declarations: [
    AppComponent,
    SmyDemoComponent,
    SmyDemoNewComponent,
  ],
  imports: [
    AppRoutingModule,
    DsaModule,
    DsaRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
