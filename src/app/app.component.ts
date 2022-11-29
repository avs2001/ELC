import { take } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { AuthRepository } from './auth/auth.repository';
import { environment } from 'src/environment/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component } from '@angular/core';

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELC';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.configureOidc();
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
