import {Directive, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Directive({
  selector: '[tmacRouter]'
})
export class TmacRouterDirective {
  @Input()
  url:string;

  @HostListener('click')
  public onHostClick(){
      if(this.url){
        this.router.navigate([this.url]);
      }else {
        this.platformLocation.back();
      }
  }
  constructor(private router:Router,
              private platformLocation:PlatformLocation) { }

}
