import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DynamicComponent} from '../../service/create-component.service';
import {PlatformLocation} from '@angular/common';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-action-sheets',
  templateUrl: './tmac-action-sheets.component.html',
  styleUrls: ['./tmac-action-sheets.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('slideFromBottom', style({'transform': 'translate3d(0px, 0px, 0px)'})),
      state('slideToBottom', style({'transform': 'translate3d(0px, 100%, 0px)'})),
      state('void', style({'transform': 'translate3d(0px, 100%, 0px)'})),
      transition('void  => slideFromBottom', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      transition('slideFromBottom  => slideToBottom', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      state('slideFromLeft', style({'transform': 'translate3d(0px, 0px, 0px)'})),
      state('slideToLeft', style({'transform': 'translate3d(-100%, 0, 0px)'})),
      state('void', style({'transform': 'translate3d(-100%, 0, 0px)'})),
      transition('void  => slideFromLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      transition('slideFromLeft  => slideToLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      transition('slideToLeft  => slideFromLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间

    ])
  ]

})
export class TmacActionSheetsComponent implements OnInit,OnDestroy,DynamicComponent {
  cancel: any;
  context: any;
  ok: any;

  state = 'slideFromBottom';
  constructor(private platformLocation:PlatformLocation,
              protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-tabbar',this.elementRef);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.state = 'slideToBottom';
  }
  bdClick(){
    if (this.context.enableBackdropDismiss) {
      this.cancel('dismiss by backdrop');
    }
  }
  onButtonClick(button){
    this.ok(button);
  }
  onCancelButtonClick(button){
    this.cancel(button);
  }

}
