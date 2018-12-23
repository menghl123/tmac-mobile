import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-list-view-item',
  templateUrl: './tmac-list-view-item.component.html',
  styleUrls: ['./tmac-list-view-item.component.scss']
})
export class TmacListViewItemComponent implements OnInit {
  @Input()
  cssClass:any;
  @Input()
  cssStyle:any;

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-list-view-item',this.elementRef);
  }

  ngOnInit() {
  }

}
