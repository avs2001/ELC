import { DefaultOAuthInterceptor } from './pages/auth/auth.interceptors';
import { AuthRepository } from './pages/auth/auth.repository';
import { TenantComponent } from './pages/tenant/tenant.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoggedInUIAccessDirective } from './ui-guards/logged-in-access.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './shared-components/switch/switch.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenantComponent,
    LoggedInUIAccessDirective,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthRepository,
    { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
