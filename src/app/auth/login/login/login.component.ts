import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { switchMap, Subject, takeUntil } from 'rxjs';
import { CommonInfo, UserTenant } from '../../auth.model';

@Component({
  selector: 'kbm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private unsubscribe$ = new Subject();

  info?: CommonInfo


  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  login() {
    this.loginService.login()
  }

  getTenants() {
    this.loginService.userTenants().pipe(
      switchMap((res: UserTenant[]) => {
        let firstTenantOrgId = res[0].organizationId;
        return this.loginService.getCommonInfo(String(firstTenantOrgId))
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe((res: CommonInfo) => {
      console.log(res)
      this.info = res;
    })
  }
}
