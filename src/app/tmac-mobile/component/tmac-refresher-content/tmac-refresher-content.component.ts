import {Component, ElementRef, Host, OnInit, Optional, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacRefresherComponent} from '../tmac-refresher/tmac-refresher.component';

@Component({
  selector: 'tmac-refresher-content',
  templateUrl: './tmac-refresher-content.component.html',
  styleUrls: ['./tmac-refresher-content.component.scss']
})
export class TmacRefresherContentComponent implements OnInit {

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService,
              @Host()@Optional() public refresherComponent:TmacRefresherComponent) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-refresher-content',this.elementRef);

  }

  ngOnInit() {
  }

  get refreshText(){
    if(this.refresherComponent){
      if(this.refresherComponent.state === 'pulling'){
        return '下拉刷新';
      }
      if(this.refresherComponent.state === 'ready'){
        return '释放立即刷新';
      }
      if(this.refresherComponent.state === 'fresh'){
        return '正在刷新...';
      }
      if(this.refresherComponent.state === 'complete'){
        return '刷新成功';
      }
    }
  }

}
