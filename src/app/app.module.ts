import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DsaModule} from './modules/dsa/dsa.module';
import {DsaRoutingModule} from './modules/dsa/dsa-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeTemplateComponent } from './components/test-d3/tree/tree-template/tree-template.component';


@NgModule({
  declarations: [
    AppComponent,
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
