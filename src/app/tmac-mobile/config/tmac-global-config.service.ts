import {Injectable} from '@angular/core';
import {CommonConstants} from '../constant/common.constants';

@Injectable({
  providedIn:'root'
})
export class TmacGlobalConfig {
   colorsMap={
    'secondary':'#32db64',
    'danger':'#f53d3d',
    'dark':'#222',
    'light':'#f4f4f4',
    'default':'#f4f4f4',
    'primary':'#327eff',
  };

  constructor() {

  }

  registerConfig(){
    this.localPlatform = this.getLocalPlatform();

    if(this.autoTheme){
      this.platform = this.localPlatform;
    }else {
      this.platform = this.platform || (CommonConstants.MD as any);
    }
  }


  platform:'md'|'ios';
  localPlatform:'md' |'ios';
  autoTheme=true; // 根据手机平台，自动切换主题（md与ios），默认是true

  public get isMd(){
    return this.platform === CommonConstants.MD;
  }

  public get isIos(){
    return this.platform === CommonConstants.IOS;
  }

  // 判断当前是安卓还是ios
  public  getLocalPlatform(){
    const userAgent = navigator.userAgent;
    const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
    const isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
      return 'md'		;
    }
    if(isiOS){
      return 'ios';
    }
  }

}
