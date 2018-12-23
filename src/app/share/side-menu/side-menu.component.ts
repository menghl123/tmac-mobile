import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TmacSideMenuService} from '../../tmac-mobile/service/tmac-side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  components=[
    {label:'下拉刷新',url:'/refresher'}
    ];
  constructor(private router:Router,
              private sideMenuService:TmacSideMenuService) { }

  ngOnInit() {
  }

  onItemClick(com){
    this.sideMenuService.close();
    this.router.navigate([com.url])
  }

}
