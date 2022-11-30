import { Router } from '@angular/router';
import { CommonInfo } from './../auth/auth.model';
import { AuthRepository } from './../auth/auth.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'kbm-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {
  info?: CommonInfo;

  constructor(
    public authRepository: AuthRepository,
    private router: Router
  ) {

  }
  
  navigateTo(route: string) {
    this.router.navigate([route])
  }

}
