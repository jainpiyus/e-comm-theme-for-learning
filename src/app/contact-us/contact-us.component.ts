import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private _service: UtilityService) { }

  ngOnInit() {
    this._service.contactEnable.next(true);
  }
  ngOnDestroy() {
    this._service.contactEnable.next(false);
  }

}
