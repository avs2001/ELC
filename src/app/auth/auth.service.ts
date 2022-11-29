import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthRepository } from './auth.repository';
import { CommonInfo, UserTenant } from '../auth/auth.model';
import { switchMap, Observable } from 'rxjs'
import { map, tap, take } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly oAuthService: OAuthService,
    private authRepository: AuthRepository,
    private http: HttpClient
  ) { }

  configureOidc() {
    this.oAuthService.configure(environment.auth);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      let token = this.oAuthService.getAccessToken();
      this.authRepository.updateIsLoggedIn(!!token);
      if(token){
        this.getLoggedInUserProfileInfo().pipe(take(1)).subscribe();
      }
    });
  }

  async login() {
    this.oAuthService.initLoginFlow();
  }

  logout(): Promise<any> {
    this.authRepository.reset();
    this.oAuthService.logOut();
    return Promise.resolve(true);
  }


  private userTenants(): Observable<UserTenant[]> {
    return this.http.get<{ result: UserTenant[] }>(`/api/common/user-tenants`).pipe(
      map(({ result }) => result),
    );
  }

  private getCommonInfo(organizationId: string): Observable<CommonInfo> {
    const headers = new HttpHeaders({
      'X-OrganizationId': organizationId,
    });
    return this.http.get<CommonInfo>(`/api/common/info`, { headers });
  }

  getLoggedInUserProfileInfo() {
    return this.userTenants().pipe(
      switchMap((tenants: UserTenant[]) => {
        let firstTenantOrgId = tenants[0].organizationId;
        return this.getCommonInfo(String(firstTenantOrgId)).pipe(
          map(commonInfo => ({tenants, commonInfo}))
        )
      }),
      tap((res)=>{
        this.authRepository.updateUserTenants(res.tenants)
        this.authRepository.updateCurrentTenant(res.commonInfo)
      })
    )
  }

}
