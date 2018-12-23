import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DynamicComponent} from '../../service/create-component.service';
import {PlatformLocation} from '@angular/common';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {SlideBottomTop} from '../../animation/slide.animation';

@Component({
  selector: 'tmac-action-sheets',
  templateUrl: './tmac-action-sheets.component.html',
  styleUrls: ['./tmac-action-sheets.component.scss'],
  animations: [SlideBottomTop]

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
