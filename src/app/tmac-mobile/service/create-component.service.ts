import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector,} from '@angular/core';
import {TmacNavService} from './nav.service';
import {timer} from 'rxjs';
import {PlatformLocation} from '@angular/common';

export interface DynamicComponent {
  ok: any;
  cancel: any;
  context: any;
}

@Injectable({
  providedIn: 'root',
})
export class TmacCreateComponentService {

  constructor(private factory: ComponentFactoryResolver,
              private injector: Injector,
              private platformLocation:PlatformLocation,
              private navService:TmacNavService,
              private appRef: ApplicationRef) {
  }

  createCompontnt(Container: any, dismiss, context,pushState?:boolean): any {
    const id = this.makeID();

    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(Container)
      .create(this.injector);
    this.appRef.attachView(component.hostView);

    const cancel = (any) => {
      this.platformLocation.back();
      dismiss.error(any);
    };

    const ok = (any) => {
      this.platformLocation.back();
      dismiss.emit(any);
    };

    component.instance.cancel = cancel;
    component.instance.ok = ok;
    component.instance.id = id;
    component.instance.context = context;
    component.instance.destroySelf = ()=>{
      this.destroy(component);
    };


    document.body.appendChild((<any>component.hostView).rootNodes[0]);

    if(pushState){
      this.navService.pushState(component);
    }

    return component;
  }

  destroy(com: ComponentRef<any>): void {
    if(com.instance && com.instance.ngOnDestroy){
      com.instance.ngOnDestroy();
      const timerSubscribe = timer(300).subscribe(()=>{
        this.appRef.detachView(com.hostView);
        timerSubscribe.unsubscribe();
      });
      return;
    }
    this.appRef.detachView(com.hostView);
  }

  makeID(): string {
    return Math.random().toString(16).substr(2, 8)
  }

}
