import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TmacGlobalService} from './service/tmac-global.service';
import {TmacAppBarComponent} from './component/app-bar/tmac-app-bar.component';
import {TmacAppBodyComponent} from './component/app-body/tmac-app-body.component';
import {TmacAppComponent} from './component/app/app.component';
import {TmacGlobalConfig} from './config/tmac-global-config.service';
import {TmaCssService} from './service/tma-css.service';
import {TmacTabViewsComponent} from './component/tmac-tab-views/tmac-tab-views.component';
import {TmacTabViewComponent} from './component/tmac-tab-view/tmac-tab-view.component';
import {TmacTabComponent} from './component/tmac-tab/tmac-tab.component';
import {TmacTabbarComponent} from './component/tmac-tabbar/tmac-tabbar.component';
import {TmacActionSheetsComponent} from './component/tmac-action-sheets/tmac-action-sheets.component';
import {TmacNavService} from './service/nav.service';
import { TmacModalComponent } from './component/app-modal/tmac-modal.component';
import { TmacBackdropComponent } from './component/tmac-backdrop/tmac-backdrop.component';
import { TmacButtonComponent } from './component/tmac-button/tmac-button.component';
import { TmacSideMenuComponent } from './component/tmac-side-menu/tmac-side-menu.component';
import { TmacListViewComponent } from './component/tmac-list-view/tmac-list-view.component';
import { TmacListViewItemComponent } from './component/tmac-list-view-item/tmac-list-view-item.component';
import { TmacListViewDividerComponent } from './component/tmac-list-view-divider/tmac-list-view-divider.component';
import { TmacRefresherComponent } from './component/tmac-refresher/tmac-refresher.component';
import { TmacRefresherContentComponent } from './component/tmac-refresher-content/tmac-refresher-content.component';
import { TmacIndicatorComponent } from './component/tmac-indicator/tmac-indicator.component';
import {TmacSideMenuToggleDirective} from './directive/side-menu-toggle/tmac-side-menu-toggle.directive';
import { TmacCardComponent } from './component/tmac-card/tmac-card.component';
import { TmacRouterDirective } from './directive/tmac-router/tmac-router.directive';
import { TmacRippleEffectComponent } from './component/tmac-ripple-effect/tmac-ripple-effect.component';

@NgModule({
  declarations: [
    TmacAppBarComponent,
    TmacAppBodyComponent,
    TmacAppComponent,
    TmacTabViewsComponent,
    TmacTabViewComponent,
    TmacTabComponent,
    TmacTabbarComponent,
    TmacActionSheetsComponent,
    TmacModalComponent,
    TmacBackdropComponent,
    TmacButtonComponent,
    TmacSideMenuComponent,
    TmacListViewComponent,
    TmacListViewItemComponent,
    TmacListViewDividerComponent,
    TmacRefresherComponent,
    TmacRefresherContentComponent,
    TmacIndicatorComponent,
    TmacSideMenuToggleDirective,
    TmacCardComponent,
    TmacRouterDirective,
    TmacRippleEffectComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[],
  exports:[
    TmacAppBarComponent,
    TmacAppBodyComponent,
    TmacAppComponent,
    TmacTabViewsComponent,
    TmacTabViewComponent,
    TmacTabbarComponent,
    TmacTabComponent,
    TmacActionSheetsComponent,
    TmacModalComponent,
    TmacBackdropComponent,
    TmacSideMenuComponent,
    TmacListViewComponent,
    TmacListViewItemComponent,
    TmacListViewDividerComponent,
    TmacRefresherComponent,
    TmacRefresherContentComponent,
    TmacIndicatorComponent,
    TmacSideMenuToggleDirective,
    TmacCardComponent,
    TmacRouterDirective,
    TmacButtonComponent,
    TmacRippleEffectComponent
  ],
  entryComponents:[TmacActionSheetsComponent]
})
export class TmacMobileModule {
  constructor(private tmaGlobalService:TmacGlobalService,
              private tmacNavService:TmacNavService,
              private tmacGlobalConfig:TmacGlobalConfig){
    this.tmacNavService.registerNav();
    this.tmaGlobalService.registerGesture();
    this.tmacGlobalConfig.registerConfig();

  }
}
