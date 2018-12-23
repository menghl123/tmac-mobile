import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class TmacAppComponent implements OnInit {
  @Input()
  state = 'right';
  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-app',this.elementRef);
  }

  ngOnInit() {
  }

}
