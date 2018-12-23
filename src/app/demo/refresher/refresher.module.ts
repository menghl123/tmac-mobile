import {NgModule} from '@angular/core';
import {RefresherBasicComponent} from './refresher-basic/refresher-basic.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './refresher.router';

@NgModule({
  declarations: [RefresherBasicComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class RefresherModule { }
