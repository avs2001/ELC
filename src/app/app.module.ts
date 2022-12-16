import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./core/layout/layout.component";
import { FooterOpenSlotComponent } from './core/footer-open-slot/footer-open-slot.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
