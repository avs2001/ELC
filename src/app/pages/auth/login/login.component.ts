import { AuthRepository } from './../auth.repository';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoggedInCase } from '../auth.model';
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'kbm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoggedInCase = LoggedInCase;
  unsubscribePersonaTimeExcited = new Subject();
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  login() {
    this.authService.login()
  }

  impersonate() {
    // here we will get a new user from somewhere
    
    this.authService.impersonateUser();
    this.authService.personaTimeExcitedListener
      .pipe(
        takeUntil(this.unsubscribePersonaTimeExcited)
      ).subscribe(res => {
        if (res) {
          // Do something
          this.router.navigate(['/login'])
          this.unsubscribePersonaTimeExcited.unsubscribe();
        }
      })
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
