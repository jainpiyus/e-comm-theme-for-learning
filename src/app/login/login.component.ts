import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _service: UtilityService, private router: Router) { }

  ngOnInit() {
  }

  login(name: HTMLInputElement){
    this._service.loggedIn.next({name: name.value});
    this.router.navigate(['home']);
  }
}
