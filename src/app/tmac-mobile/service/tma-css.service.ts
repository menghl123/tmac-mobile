import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {TmacGlobalConfig} from '../config/tmac-global-config.service';

@Injectable({
  providedIn:'root'
})
export class TmaCssService {
  constructor(private globalConfig:TmacGlobalConfig ) {
  }

 // 渲染组件的css
  public renderComponentClass(render:Renderer2,componentName:string,element:ElementRef){
    this.generateClassByConfigAndPlatform(componentName).forEach(cssClass => render.addClass(element.nativeElement,cssClass));
  }

  // 根据当前平台以及配置，生成组件的class
  public generateClassByConfigAndPlatform(componentName:string){
    const platform = this.globalConfig.platform;
    return [componentName,`${componentName}-${platform}`];
  }

}
