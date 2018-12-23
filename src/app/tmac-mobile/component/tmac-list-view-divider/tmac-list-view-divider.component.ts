import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-list-view-divider',
  templateUrl: './tmac-list-view-divider.component.html',
  styleUrls: ['./tmac-list-view-divider.component.scss']
})
export class TmacListViewDividerComponent implements OnInit {
  @Input()
  cssClass:string;
  @Input()
  cssStyle:any;
  @Input()
  color:string;
  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-list-view-divider',this.elementRef);
  }

  ngOnInit() {
  }

}
