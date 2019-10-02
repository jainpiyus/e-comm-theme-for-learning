import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "", redirectTo: "home" , pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "gallery", component: GalleryComponent
  },
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "product/:id", component: ProductComponent
  },
  {
    path: "contact-us", component: ContactUsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
