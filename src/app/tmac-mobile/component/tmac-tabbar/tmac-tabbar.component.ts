import {AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacTabComponent} from '../tmac-tab/tmac-tab.component';
import {TmacTabViewsComponent} from '../tmac-tab-views/tmac-tab-views.component';

@Component({
  selector: 'tmac-tabbar',
  templateUrl: './tmac-tabbar.component.html',
  styleUrls: ['./tmac-tabbar.component.scss']
})
export class TmacTabbarComponent implements OnInit,AfterContentInit,AfterViewInit {
  transformStyle:string ='0';
  transformDurationStyle='0ms';

  prevPercent=0;

  @ContentChildren(TmacTabComponent)
  tabViews:QueryList<TmacTabComponent>;

  @Input()
  tmacTabViews:TmacTabViewsComponent;

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-tabbar',this.elementRef);
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    if(this.tmacTabViews){
      this.tmacTabViews.onViewChange.subscribe(percent => {
        this.transformStyle = `translate3d(${percent * this.elementRef.nativeElement.clientWidth}px, 0px, 0px)`;
        if(Math.abs(percent -this.prevPercent) > 0.1){
          this.transformDurationStyle='300ms'
        }

        this.prevPercent = percent;
      })
    }else {
      throw new Error('please input tabViews');
    }
  }


  ngAfterContentInit(): void {

  }

  public get lineWidth(){
    if(this.tmacTabViews && this.tmacTabViews.tabViews){
      return this.elementRef.nativeElement.clientWidth / this.tmacTabViews.tabViews.length + 'px';
    }else {
      return '0';
    }
  }

}
