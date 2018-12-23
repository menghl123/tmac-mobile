import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TmacMobileModule} from '../tmac-mobile/tmac-mobile.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    TmacMobileModule
  ],
  exports:[
    CommonModule,
    TmacMobileModule,
    SideMenuComponent
  ]
})
export class ShareModule { }
