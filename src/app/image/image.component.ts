import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  products:[];
  constructor(private router: Router, private _service: UtilityService, private productService: ProductService) { 
    this.productService.getAllProducts().subscribe(res=>{
      this.products = res;
    })
  }

  ngOnInit() {
  }

}
