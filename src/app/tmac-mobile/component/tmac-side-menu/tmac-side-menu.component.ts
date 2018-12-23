import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacSideMenuService} from '../../service/tmac-side-menu.service';

@Component({
  selector: 'tmac-side-menu',
  templateUrl: './tmac-side-menu.component.html',
  styleUrls: ['./tmac-side-menu.component.scss']
})
export class TmacSideMenuComponent implements OnInit,OnDestroy {
  prevX:number = 0;
  movedX:number = 0;
  transformStyle:string ='translate3d(-100%, 0, 0px)';
  transformDurationStyle='0ms';

  startEvent;


  @ViewChild('innerMenu')
  InnerMenu:ElementRef;

  @Input()
  enableBackdropDismiss:boolean = true;

  @Input()
  id:string;

  @Input()
  isShow=false;
  constructor(private platformLocation:PlatformLocation,
              protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmacSideMenuService:TmacSideMenuService,
              protected tmaCssService:TmaCssService) {
    this.tmacSideMenuService.register(this);
    this.tmaCssService.renderComponentClass(renderer,'tmac-tabbar',this.elementRef);
  }

  ngOnInit() {
    if(this.isShow){
      this.show();
    }
  }

  ngOnDestroy(): void {
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
    if(globalMovedX > 10 && ($event.timeStamp - this.startEvent.timeStamp) <300){
     this.hide();
     return ;
    }
    //
    // 根据移动的x距离，判断结束时候的index
    if(Math.abs(this.movedX) < this.getTabViewWidth() / 2){
      this.show();
    }else {
      this.hide();
    }
  }

  changeTransformStyle(range){
    this.movedX = this.movedX + range;

    if(this.movedX >= this.maxX){
      this.movedX = this.maxX;
    }

    this.transformStyle = `translate3d(${this.movedX}px, 0px, 0px)`;
  }

  getTabViewWidth(){
    return this.InnerMenu.nativeElement.clientWidth ;
  }

  get maxX(){
    return 0;
  }

  get minX(){
    return this.elementRef.nativeElement.clientWidth;
  }

  toggle(){
    if(!this.isShow){
      this.show();
    }else {
      this.hide();
    }
  }

  onDbClick(){
    if (this.enableBackdropDismiss) {
      this.hide();
    }
  }

  show(){
    this.transformStyle = 'translate3d(0, 0, 0px)';
    this.transformDurationStyle = '300ms';
    this.isShow = true;
  }

  hide(){
    this.transformStyle = 'translate3d(-100%, 0, 0px)';
    this.transformDurationStyle = '300ms';
    this.isShow = false;
  }

}
