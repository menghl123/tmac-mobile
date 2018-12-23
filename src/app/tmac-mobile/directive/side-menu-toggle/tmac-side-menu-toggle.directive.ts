import {Directive, HostListener, Input} from '@angular/core';
import {TmacSideMenuService} from '../../service/tmac-side-menu.service';

@Directive({
  selector: '[tmacSideMenuToggle]'
})
export class TmacSideMenuToggleDirective {
  @Input()
  sideMenuId:string;

  @HostListener('click')
  public onHostClick(){
    this.sideMenuService.toggleById(this.sideMenuId);
  }
  constructor(private sideMenuService:TmacSideMenuService) {
  }

}
