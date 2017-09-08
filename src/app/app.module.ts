import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { ProductDetailService } from 'app/product-detail.service';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private productDetailService: ProductDetailService) {
    // We do not want to store single product data here but this would be useful for storing resources that multiple components might use: return policies?
  }
}
