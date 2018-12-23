import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2
} from '@angular/core';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';
import {TmacAppBodyComponent} from '../app-body/tmac-app-body.component';
import {fromEvent, Subscription, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'tmac-refresher',
  templateUrl: './tmac-refresher.component.html',
  styleUrls: ['./tmac-refresher.component.scss']
})
export class TmacRefresherComponent implements OnInit,AfterViewInit,OnDestroy {
  touchStartSubscribe:Subscription;
  touchMoveSubscribe:Subscription;
  touchEndSubscribe:Subscription;

  prevY:number;
  translatedY:number = 0;

  state:'hidden' | 'pulling' | 'ready' | 'fresh' | 'complete' = 'hidden';

  @Input()
  maxPull:number = 200; // 最大的拉动距离
  @Input()
  minPull:number = 40; // 拉动多少距离便会触动刷新
  @Input()
  transition:number = 300; // 滑动动画的时间
  @Input()
  pullSpeed:number = 0.5; // 滑动速度
  @Input()
  enable:boolean = true; // 滑动速度
  @Input()
  completeDelay:number = 400; // 滑动速度

  @Output()
  onRefresh:EventEmitter<TmacRefresherComponent> = new EventEmitter();


  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService,
              @Host()@Optional() private appBodyComponent:TmacAppBodyComponent) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-refresher',this.elementRef);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // 初始化top
    this.renderer.setStyle(this.elementRef.nativeElement,'top',`${this.appBodyComponent._top}px`)

    this.touchStartSubscribe = fromEvent(this.appBodyComponent.scrollElement,'touchstart')
      .pipe(map($event =>($event as any).targetTouches[0]))
      .subscribe((touch)=>{
        if(this.enable && this.canStartMove()){
          this.prevY =   touch.pageY;
          this.renderTransition(0);
        }
      });

    this.touchMoveSubscribe = fromEvent(this.appBodyComponent.scrollElement,'touchmove')
      .pipe(map($event =>($event as any).targetTouches[0]))
      .subscribe((touch)=>{
          if(this.enable && this.canStartMove() && this.prevY){
            this.translatedY += (touch.pageY  - this.prevY)*this.pullSpeed;

            if(this.translatedY >0 && this.translatedY < this.minPull){
              this.changeState('pulling')
            }

            if(this.translatedY >this.minPull ){
              this.changeState('ready')
            }

            this.renderTransition(0);
            this.renderTranslated(this.translatedY);
            this.prevY = touch.pageY;
          }
      });

    this.touchEndSubscribe = fromEvent(this.appBodyComponent.scrollElement,'touchend')
      .subscribe((() =>{
        if(this.enable && this.canStartMove() && this.prevY){
          if(this.translatedY <this.minPull){
            this.translatedY = 0;
            this.renderTranslated(this.translatedY);
            this.renderTransition(this.transition);
            this.changeState('hidden')
          }

          if(this.translatedY > this.minPull){
            this.translatedY = this.minPull;
            this.renderTranslated(this.translatedY);
            this.renderTransition(this.transition);
            this.changeState('fresh');
            this.onRefresh.emit(this);
          }
        }
        this.prevY = null;
      }));
  }

  ngOnDestroy(): void {
    if(this.touchStartSubscribe){
      this.touchStartSubscribe.unsubscribe();
    }
    if(this.touchMoveSubscribe){
      this.touchMoveSubscribe.unsubscribe();
    }
    if(this.touchEndSubscribe){
      this.touchEndSubscribe.unsubscribe();
    }
  }

  // 只有scroll在顶部的时候，才能监听滑动
  canStartMove(){
    return this.appBodyComponent.scrollElement.scrollTop === 0;
  }

  renderTranslated(translatedY:number){
    if(translatedY > this.maxPull){
      translatedY = this.maxPull;
    }
    if(translatedY < 0){
      translatedY = 0;
    }

    this.renderer.setStyle(this.appBodyComponent.scrollElement,'transform',`translate3d(0px, ${translatedY}px, 0px)`)
  }

  renderTransition(transition:number){
    this.renderer.setStyle(this.appBodyComponent.scrollElement,'transition',`${transition}ms`)
  }

  // 关闭刷新
  public complete(){
    this.changeState('complete')
    const timerSubscripe = timer(this.completeDelay).subscribe(()=>{
      this.renderTransition(this.transition);
      this.renderTranslated(0);
      this.translatedY = 0;
      this.changeState('hidden')
      timerSubscripe.unsubscribe();
    });
  }

  // 禁止使用
  public disable(enable:boolean){
    this.enable = enable;
  }

  // 修改状态
  private changeState(state:any){
    this.state  = state;
  }

}
