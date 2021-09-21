import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MainRoutes } from './routes/routing';

import { AppComponent } from './app.component';

import { MainModule } from './routes/main/main.module';
import { ProductListModule } from './routes/product-list/product-list.module';
import { CheckoutModule } from './routes/checkout/checkout.module';
import { OrderListModule } from './routes/order-list/order-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutes,
    CheckoutModule,
    MainModule,
    ProductListModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
