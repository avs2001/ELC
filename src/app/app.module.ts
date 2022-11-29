import { LoggedInUIAccessDirective } from './auth/logged-in-access.directive';
import { AuthRepository } from './auth/auth.repository';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultOAuthInterceptor } from './auth/auth.interceptors';
import { TenantComponent } from './tenant/tenant.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenantComponent,
    LoggedInUIAccessDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthRepository,
    { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
