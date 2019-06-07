import { ContactUsComponent } from './../component/contact-us/contact-us.component';
import { AdminComponent } from './../layouts/admin/admin.component';
import { AuthGuard } from './../auth/auth.guard';
import { ObjectComponent } from '../collections/products/prom-formal-dress/object.component';
import { BridesmaidDressComponent } from './../collections/bridesmaid-dress/bridesmaid-dress.component';
import { PromFormalDressComponent } from './../collections/prom-formal-dress/prom-formal-dress.component';
import { WeddingDressesComponent } from './../collections/wedding-dresses/wedding-dresses.component';
import { ProductsComponent } from './../collections/products/products.component';
import { MainCollectionsComponent } from './../collections/main-collections/main-collections.component';
import { AboutUsComponent } from './../component/about-us/about-us.component';
import { HomeComponent } from './../component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WeddingDressesProductComponent } from '../collections/products/wedding-dresses/wedding-dresses.component';
import { BridesmaidProductComponent } from '../collections/products/bridesmaid-product/bridesmaid-product.component';
import {AdminGuard} from './../auth/admin.guard';
import { ReturnExchangeComponent } from '../component/return-exchange/return-exchange.component';
const adminRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],

  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'return-exchange', component: ReturnExchangeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us', component: ContactUsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'collections', component: MainCollectionsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'collections/wedding-dresses', component: WeddingDressesComponent,canActivate: [AuthGuard] },
  { path: 'collections/prom-formal-dress', component: PromFormalDressComponent,canActivate: [AuthGuard] },
  { path: 'collections/bridesmaid-dress', component: BridesmaidDressComponent,canActivate: [AuthGuard] },
  {
    path: 'products', component: MainCollectionsComponent, canActivate: [AuthGuard],
  },
  { path: 'products/prom-formal-dress/:id', component: ObjectComponent, canActivate: [AuthGuard] },
  { path: 'products/wedding-dresses/:id', component: WeddingDressesProductComponent, canActivate: [AuthGuard] },
  { path: 'products/bridesmaid-dress/:id', component: BridesmaidProductComponent, canActivate: [AuthGuard] },
  {
    path: 'home/upload',
    component: AdminComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
