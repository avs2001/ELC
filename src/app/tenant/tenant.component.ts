import { Router } from '@angular/router';
import { CommonInfo } from './../auth/auth.model';
import { takeUntil, Subject, Observable } from 'rxjs';
import { AuthRepository } from './../auth/auth.repository';
import { Component } from '@angular/core';
import { TenantService } from './tenant.service';

@Component({
  selector: 'kbm-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {
  private unsubscribe$ = new Subject();
  info?: CommonInfo;

  constructor(
    private authRepository: AuthRepository,
    private tenantService: TenantService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.authRepository.currentTenant$.subscribe(res=>{
      this.info = res
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }
  
  navigateTo(route: string) {
    this.router.navigate([route])
  }

}
