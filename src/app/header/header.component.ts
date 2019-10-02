import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: any;
  contactEnable: boolean;
  backEnable = { url: '', text: ''};
  cartCount:number;

  constructor(private _service: UtilityService, private router: Router) { 
   
  }
  ngOnInit() {
    this._service.contactEnable.subscribe(res => {
      this.contactEnable = res;
    });
    this._service.loggedIn.subscribe(res => {
      this.loggedIn =res;
    });
    this._service.backEnable.subscribe(res => {
      this.backEnable = res;
    });
    this._service.cartCount.subscribe(res => {
      this.cartCount = res;
    });
  }
  login() {
    this.router.navigate(['login']);
    this._service.cartCount.next(0);
  }
  logout() {
    this._service.loggedIn.next({name: ''});
  }

}
