import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {TmacGlobalConfig} from '../../config/tmac-global-config.service';
import {TmaCssService} from '../../service/tma-css.service';

@Component({
  selector: 'tmac-ripple-effect',
  templateUrl: './tmac-ripple-effect.component.html',
  styleUrls: ['./tmac-ripple-effect.component.scss']
})
export class TmacRippleEffectComponent implements OnInit {
  @ViewChild('rippleContainer')
  rippleContainer:ElementRef;
  @ViewChild('ripple')
  ripple:ElementRef;
  @Input()
  showContainer :boolean= false;

  containerStyle= {};
  rippleStyle= {};
  constructor(private platformLocation:PlatformLocation,
              protected elementRef:ElementRef,
              protected renderer:Renderer2,
              protected tmacGlobalConfig:TmacGlobalConfig,
              protected tmaCssService:TmaCssService) {
    this.tmaCssService.renderComponentClass(renderer,'tmac-ripple-effect',this.elementRef);
  }

  ngOnInit() {
  }

  onHostClick(event,host){
    const ripplerContainer = this.elementRef.nativeElement.querySelector('.tmac-ripple-container');
    if(ripplerContainer) {
      ripplerContainer.remove();
    }

    const newRippleContainer = this.renderer.createElement('div');
    const offsetInfo = host.elementRef.nativeElement.getBoundingClientRect();
    this.renderer.addClass(newRippleContainer,'tmac-ripple-container');
    this.renderer.setStyle(newRippleContainer,'width',offsetInfo.width + 'px');
    this.renderer.setStyle(newRippleContainer,'height',offsetInfo.height + 'px');
    this.renderer.appendChild(this.elementRef.nativeElement,newRippleContainer);

    const circleD = offsetInfo.width * 2;
    const newRipple = this.renderer.createElement('div');
    this.renderer.addClass(newRipple,'tmac-ripple');
    this.renderer.setStyle(newRipple,'width',circleD + 'px');
    this.renderer.setStyle(newRipple,'height',circleD + 'px');
    this.renderer.setStyle(newRipple,'left',((event.pageX - offsetInfo.left) - circleD/2) + 'px');
    this.renderer.setStyle(newRipple,'top',((event.pageY - offsetInfo.top) - circleD/2) + 'px');
    this.renderer.appendChild(newRippleContainer,newRipple);

    newRipple.addEventListener('animationend', function(){
      newRippleContainer.remove();
    }.bind(this), false);
  }

}
