import {Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TmacRippleEffectComponent} from '../tmac-ripple-effect/tmac-ripple-effect.component';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: '[tmac-button]',
  templateUrl: './tmac-button.component.html',
  styleUrls: ['./tmac-button.component.scss']
})
export class TmacButtonComponent implements OnInit {

  @ViewChild(TmacRippleEffectComponent)
  effect:TmacRippleEffectComponent;

  @Input()
  color;
  @Input()
  type='default';
  constructor(protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-button',this.elementRef);
  }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement,`tmac-button-${this.type}`)
  }
  @HostListener('click',['$event'])
  public onHostClick(event){
    this.effect.onHostClick(event,this);
  }

  onButtonEffectClick(){
  }

}
