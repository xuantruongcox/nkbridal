import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FooterComponent } from './component/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PromFormalDressComponent } from './collections/prom-formal-dress/prom-formal-dress.component';
import { LoginComponent } from './component/login/login.component';
import { WeddingDressesComponent } from './collections/wedding-dresses/wedding-dresses.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PromFormalDressComponent,
    LoginComponent,
    WeddingDressesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    DragScrollModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
