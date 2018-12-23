import {Component, ElementRef, Host, OnInit, Optional, Renderer2, ViewChild} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacAppBodyComponent} from '../app-body/tmac-app-body.component';

@Component({
  selector: 'tmac-list-view',
  templateUrl: './tmac-list-view.component.html',
  styleUrls: ['./tmac-list-view.component.scss']
})
export class TmacListViewComponent implements OnInit {
  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              @Host() @Optional() private appBodyComponent:TmacAppBodyComponent,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-list-view',this.elementRef);
  }

  ngOnInit() {
  }

}
