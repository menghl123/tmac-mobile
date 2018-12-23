import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacTabViewComponent} from '../tmac-tab-view/tmac-tab-view.component';

@Component({
  selector: 'tmac-tab-views',
  templateUrl: './tmac-tab-views.component.html',
  styleUrls: ['./tmac-tab-views.component.scss']
})
export class TmacTabViewsComponent implements OnInit,AfterViewInit {
  transformStyle='translate3d(0px, 0px, 0px)';
  transformDurationStyle='0ms';

  prevX:number = 0;
  movedX:number = 0;

  startEvent;

  @ViewChild('tabViewWrapper')
  TabViewWrapper:ElementRef;
  @ContentChildren(TmacTabViewComponent)
  tabViews:QueryList<TmacTabViewComponent>;

  @Input()
  activeIndex = 0;

  @Output()
  onIndexChange:EventEmitter<number>=new EventEmitter<number>();
  @Output()
  onViewChange:EventEmitter<number>=new EventEmitter<number>();

  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-tab-views',this.elementRef);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.changeViewByIndex(this.activeIndex);

  }

  public changeViewByIndex(index:number){
    this.movedX = -(index * this.getTabViewWidth());
    this.changeTransformStyle(0);
    this.activeIndex = index;
  }

  onPanStart($event){
    $event.preventDefault();
    this.prevX =$event.center.x;

    this.startEvent = $event;
  }

  onPanMove($event){
    $event.preventDefault();

    const range = $event.center.x - this.prevX;
    this.changeTransformStyle(range);
    this.prevX = $event.center.x;
  }

  onPanEnd($event){
    $event.preventDefault();

    this.prevX = null;

    // 如果是快速移动，则直接滑动
    const globalMovedX = this.startEvent.center.x-$event.center.x;
    if(Math.abs(globalMovedX) > 10 && ($event.timeStamp - this.startEvent.timeStamp) <300){
      const movedIndexX = this.movedX % this.getTabViewWidth();
      let range;

      if(globalMovedX < 0){
        range = - movedIndexX;
      }else {
        range = - this.getTabViewWidth() - movedIndexX;
        if( (this.movedX +  range) <= this.minX){
          range = - movedIndexX;
        }
     }
      this.changeTransformStyle(range);
      return;
    }


    // 根据移动的x距离，判断结束时候的index
    const movedIndexX = this.movedX % this.getTabViewWidth();
    let range;
    if(Math.abs(movedIndexX) < this.getTabViewWidth() / 2){
       range = - movedIndexX;
    }else {
       range = - this.getTabViewWidth() - movedIndexX;
    }
    this.changeTransformStyle(range);
  }

  changeTransformStyle(range:number){
    this.movedX = this.movedX +  range;

    if(this.movedX >= this.maxX){
      this.movedX = this.maxX;
    }
    if(this.movedX <= this.minX){
      this.movedX = this.minX;
    }

    this.transformStyle = `translate3d(${this.movedX}px, 0px, 0px)`;

    if(Math.abs(range) <10){
      this.transformDurationStyle='0ms';
    }else {
      this.transformDurationStyle='300ms'
    }

    this.indexChangeSubscribe();
    this.viewChangeSubscribe();

  }

  getTabViewWidth(){
    return this.elementRef.nativeElement.clientWidth;
  }

  getTabViewsCount(){
    return this.tabViews.length;
  }

  get maxX(){
    return this.getTabViewWidth()/2 -10;
  }

  get minX(){
    return -(this.getTabViewWidth()*(this.getTabViewsCount() -1) + this.getTabViewWidth()/2 -10);
  }

  private indexChangeSubscribe() {
    const nowIndex = -(this.movedX / this.getTabViewWidth());

    if(nowIndex%1===0 && this.activeIndex !== nowIndex){
      this.activeIndex = nowIndex;
      this.onIndexChange.emit(this.activeIndex);
    }
  }

  private viewChangeSubscribe() {
    const percent = Math.abs(this.movedX) / (this.getTabViewWidth() * this.tabViews.length);
    this.onViewChange.emit(percent);
  }
}
