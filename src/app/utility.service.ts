import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public backEnable = new BehaviorSubject({url: '', text: ''});
  public contactEnable = new BehaviorSubject(false);
  public loggedIn = new BehaviorSubject({name: ''});
  public cartCount = new BehaviorSubject(0);
}
