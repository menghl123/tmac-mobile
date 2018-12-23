import {Routes} from '@angular/router';
import {ListviewDemoComponent} from './test/listview-demo/listview-demo.component';
import {IndexComponent} from './normal/index/index.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', component:IndexComponent},
  {path: 'listview', component:ListviewDemoComponent},
  {path: 'refresher', loadChildren: './demo/refresher/refresher.module#RefresherModule'},
];
