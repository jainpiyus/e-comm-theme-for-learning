import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product:any;
  constructor(private _service: UtilityService, private productService: ProductService, private route: ActivatedRoute) { 
    
    this.productService.getSingleProduct(Number(this.route.snapshot.params.id)).subscribe(res => {
      this.product = res;
    });
  }

  ngOnInit() {

  }


  ngOnDestroy() {
    this._service.backEnable.next({url: '', text: ''});
  }
}
