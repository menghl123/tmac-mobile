import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.router';
import { ListviewDemoComponent } from './test/listview-demo/listview-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListviewDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    CoreModule,
    RouterModule.forRoot(ROUTER_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
