import {AfterContentInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {slideLeftRight} from '../../animation/slide.animation';

@Component({
  selector: 'tmac-appbody',
  templateUrl: './tmac-app-body.component.html',
  styleUrls: ['./tmac-app-body.component.scss'],
  animations:[slideLeftRight]
})
export class TmacAppBodyComponent implements OnInit,AfterContentInit,OnDestroy  {
  _top;
  _bottom;

  @ViewChild('scrollContent')
  public _scrollContent: ElementRef;
  @Input()
  state='normal';
  // 内容正在滑动
  @Output()
  public scrolling: EventEmitter<any> = new EventEmitter();
  // 滑动结束
  @Output()
  public scrollEnd: EventEmitter<any> = new EventEmitter();
  // 开始滑动
  @Output()
  public scrollStart: EventEmitter<any> = new EventEmitter();

  constructor(private renderer2:Renderer2,
              private elementRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.initContentHeight();
  }

  private initContentHeight(){
    const parent = this.elementRef.nativeElement.parentElement;
    for (let child of parent.childNodes) {
      if (child.tagName === 'TMAC-APPBAR') {
        this._top = child.clientHeight;
      }
      if (child.tagName === 'TMAC-FOOTER') {
        this._bottom = child.clientHeight;
      }
    }
    if (this._top) {
      this.renderer2.setStyle(this._scrollContent.nativeElement,'marginTop',`${this._top}px`);
    }
    if (this._bottom) {
      this.renderer2.setStyle(this._scrollContent.nativeElement,'marginTop',`${this._bottom}px`);
    }
  }

  public get scrollElement(){
    return this._scrollContent.nativeElement;
  }

  ngOnDestroy(): void {
    this.state = 'right'
  }

}
