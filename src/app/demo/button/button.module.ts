import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './button.router';
import {ButtonBasicComponent} from './button-basic/button-basic.component';

@NgModule({
  declarations: [ButtonBasicComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ]
})
export class ButtonModule { }
