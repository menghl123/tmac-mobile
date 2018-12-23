import {Routes} from '@angular/router';
import {ButtonBasicComponent} from './button-basic/button-basic.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {
    path: 'basic', component: ButtonBasicComponent
  }
];
