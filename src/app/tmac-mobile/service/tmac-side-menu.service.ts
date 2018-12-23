import {Injectable,} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TmacSideMenuService {
  sidemenus:any[]=[];

  constructor() {
  }

  register(sidemenu){
    this.sidemenus.push(sidemenu);
  }
  toggleById(id?:string){
    let sideMenu;
    if(!id){
      sideMenu = this.sidemenus[this.sidemenus.length -1];
    }else {
      sideMenu = this.sidemenus.find(sideMenu =>sideMenu.id === id);
    }
    if(sideMenu){
      sideMenu.toggle();
    }

  }

  close(id?:string){
    let sideMenu;
    if(!id){
      sideMenu = this.sidemenus[this.sidemenus.length -1];
    }else {
      sideMenu = this.sidemenus.find(sideMenu =>sideMenu.id === id);
    }
    if(sideMenu){
      sideMenu.hide();
    }

  }

  show(id?:string){
    let sideMenu;
    if(!id){
      sideMenu = this.sidemenus[this.sidemenus.length -1];
    }else {
      sideMenu = this.sidemenus.find(sideMenu =>sideMenu.id === id);
    }
    if(sideMenu){
      sideMenu.show();
    }

  }


}
