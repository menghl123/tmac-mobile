import {Routes} from '@angular/router';
import {ListviewDemoComponent} from './test/listview-demo/listview-demo.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/refresher/basic'},
  {path: 'listview', component:ListviewDemoComponent},
  {path: 'refresher', loadChildren: './demo/refresher/refresher.module#RefresherModule'},
];
