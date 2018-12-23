import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-tab',
  templateUrl: './tmac-tab.component.html',
  styleUrls: ['./tmac-tab.component.scss']
})
export class TmacTabComponent implements OnInit {

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-tab',this.elementRef);
  }

  ngOnInit() {
  }

}
