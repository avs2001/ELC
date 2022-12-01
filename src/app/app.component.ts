import { AuthService } from './pages/auth/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
