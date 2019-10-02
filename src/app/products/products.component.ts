import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import {trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  count: number;
  products:[];
  constructor(private router: Router, private _service: UtilityService, private productService: ProductService) { 
    this.productService.getAllProducts().subscribe(res=>{
      this.products = res;
    })
  }

  ngOnInit() {
    this._service.cartCount.subscribe(res => {
      this.count = res;
    })
  }
  
  productHome(id) {
    this.router.navigate(['product/'+id]);
    this._service.backEnable.next({url: 'products', text: 'Back to Products'});
  }

  addToCart(event) {
    event.stopPropagation();
    this.count = this.count + 1;
    this._service.cartCount.next(this.count);
  }

}
