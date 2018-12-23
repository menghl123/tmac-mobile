import {EventEmitter, Injectable,} from '@angular/core';
import {extend} from '../utils/utils';
import {TmacCreateComponentService} from './create-component.service';
import {TmacActionSheetsComponent} from '../component/tmac-action-sheets/tmac-action-sheets.component';

@Injectable({
  providedIn: 'root',
})
export class TmacActionSheetService {
  constructor(private createComponentService: TmacCreateComponentService) {
  }

  builder(){
    return new TmacActionSheetBuilder(this);
  }

  show(option) {
    const dimiss = new EventEmitter<any>();
    this.createComponentService.createCompontnt(TmacActionSheetsComponent, dimiss, option,true);
    return dimiss;
  }
}

export class TmacActionSheetBuilder {
  public _showBackdrop:boolean = true;
  public _enableBackdropDismiss:boolean = true;
  public _title:string = '选择';
  public _cancelButton = {
    text: '取消',
    role: 'cancel',
    icon: 'fa fa-close',
  };
  public _buttons = [];

  constructor(private tmacActionSheetService:TmacActionSheetService) {
  }

  public showBackdrop(backdrop:boolean){
    this._showBackdrop = backdrop;
    return this;
  }

  public enableBackdropDismiss(enableBackdropDismiss:boolean){
    this._enableBackdropDismiss = enableBackdropDismiss;
    return this;
  }

  public title(title:string){
    this._title = title;
    return this;
  }

  public cancelButton(text:string,icon:any,role?:any){
    this._cancelButton = {
      text: text,
      icon:icon,
      role: role,
    };
    return this;
  }

  public button(text:string,icon:any,role?:any){
    this._buttons.push({
      text: text,
      icon:icon,
      role: role,
    });
    return this;
  }

  public buttons(buttons:any[]){
    this._buttons = this._buttons.concat(buttons);
    return this;
  }

  present(){
    this.tmacActionSheetService.show(this.generateDefaultOption());
  }

  public generateDefaultOption(){
    return {
      title: this._title,
      enableBackdropDismiss: this._enableBackdropDismiss,
      buttons: this._buttons || [],
      cancelButton: this._cancelButton,
      showBackdrop: this._showBackdrop,
    };
  }
}
