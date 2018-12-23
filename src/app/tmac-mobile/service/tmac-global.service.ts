import {Injectable} from '@angular/core';
import {Hammer} from '../gesture/hammer';

@Injectable({
  providedIn:'root'
})
export class TmacGlobalService {
  constructor() {

  }

  // 注册手势事件
  registerGesture(){
    Hammer(window,{});
  }

}
