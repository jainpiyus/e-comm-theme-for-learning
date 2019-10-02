import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    ProductsComponent,
    ContactUsComponent,
    HomeComponent,
    ProductComponent,
    ImageComponent,
    LoginComponent,
    HelpComponent,
    
    
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
