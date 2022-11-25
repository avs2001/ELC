import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmActionDirective } from './confirm-action/confirm-action.directive';
import { ConfirmActionComponent } from './confirm-action/confirm-action.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ConfirmActionComponent,
    ConfirmActionDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
