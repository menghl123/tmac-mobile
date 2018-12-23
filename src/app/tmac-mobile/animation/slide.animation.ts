import {animate, state, style, transition, trigger} from '@angular/animations';

export const SlideBottomTop =trigger('SlideBottomTop', [
  state('slideFromBottom', style({'transform': 'translate3d(0px, 0px, 0px)'})),
  state('slideToBottom', style({'transform': 'translate3d(0px, 100%, 0px)'})),
  state('void', style({'transform': 'translate3d(0px, 100%, 0px)'})),
  transition('void  => slideFromBottom', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('slideFromBottom  => slideToBottom', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  state('slideFromLeft', style({'transform': 'translate3d(0px, 0px, 0px)'})),
  state('slideToLeft', style({'transform': 'translate3d(-100%, 0, 0px)'})),
  state('void', style({'transform': 'translate3d(-100%, 0, 0px)'})),
  transition('void  => slideFromLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('slideFromLeft  => slideToLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('slideToLeft  => slideFromLeft', animate('.3s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
]);

export const slideLeftRight =trigger('slideLeftRight', [
  state('right', style({'transform': 'translate3d(100%, 0px, 0px)','opacity':0})),
  state('normal', style({'transform': 'translate3d(0px, 0px, 0px)','opacity':1})),
  state('left', style({'transform': 'translate3d(-100%, 0px, 0px)','opacity':0})),
  state('void', style({'transform': 'translate3d(-100%, 0px, 0px)','opacity':0})),
  transition('void  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('void  => right', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('left  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => right', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => void', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('normal  => left', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
  transition('right  => normal', animate('.2s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
]);
