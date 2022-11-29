import { AuthRepository } from './../auth.repository';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'kbm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public authRepository: AuthRepository,
    private authService: AuthService,
    private router: Router
  ) {

  }

  login() {
    this.authService.login()
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
