import { Component } from '@angular/core';
import {TmacActionSheetService} from './tmac-mobile/service/tmac-action-sheet.service';
import {TmacSideMenuService} from './tmac-mobile/service/tmac-side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmac-mobile';

  constructor(private actionSheetService:TmacActionSheetService,
              private sideMenuService:TmacSideMenuService){
    // this.actionSheetService.builder()
    //   .title('选择')
    //   .button('男生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .button('女生','fa fa-home')
    //   .enableBackdropDismiss(true)
    //   .cancelButton('取消','fa fa-close')
    //   .present();
  }

  onViewChange($event){
  }

  toggleMenu(){
    this.sideMenuService.toggleById()
  }
}
