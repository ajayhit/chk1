import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductformComponent } from './productform/productform.component';
import { ReactiveFormsModule } from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    ProductinfoComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
