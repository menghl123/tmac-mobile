import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';

@Component({
  selector: 'tmac-appbar',
  templateUrl: './tmac-app-bar.component.html',
  styleUrls: ['./tmac-app-bar.component.scss']
})
export class TmacAppBarComponent implements OnInit {
  @Input()
  //  'default' | 'secondary' |'danger'|'dark'|'primary'
  backgroundColor;

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-appbar',this.elementRef);
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.configData.backgroundColor)
  }

  public get configData(){
    return {
      backgroundColor:this.tmacGlobalConfig.colorsMap[this.backgroundColor] || this.backgroundColor
    }
  }

}
