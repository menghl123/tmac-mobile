import {Routes} from '@angular/router';
import {RefresherBasicComponent} from './refresher-basic/refresher-basic.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'basic'},
  {
    path: 'basic', component: RefresherBasicComponent
  }
];
