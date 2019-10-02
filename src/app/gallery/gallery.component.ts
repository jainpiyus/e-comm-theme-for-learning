import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images:[];
  constructor(private productService: ProductService) { 
    this.productService.getAllProducts().subscribe(res=>{
      this.images = res;
      this.images.concat(this.images);
    })
  }
  ngOnInit() {
  }

}
