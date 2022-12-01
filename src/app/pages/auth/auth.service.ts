import { DATE_NOW } from './../../tokens';
import { UserInfo } from './auth.model';
import { environment } from 'src/environment/environment';
import { Inject, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthProps, AuthRepository } from './auth.repository';
import { CommonInfo, UserTenant } from '../auth/auth.model';
import { switchMap, Observable, BehaviorSubject } from 'rxjs'
import { map, tap, take } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { USER_STORE } from 'src/app/tokens';
import { dateDiff } from 'src/app/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private personaTimeExcitedListener$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public readonly personaTimeExcitedListener: Observable<boolean> = this.personaTimeExcitedListener$.asObservable();

  constructor(
    private readonly oAuthService: OAuthService,
    @Inject(USER_STORE) private authRepository: AuthRepository,
    private http: HttpClient
  ) { }

  configureOidc() {
    this.oAuthService.configure(environment.auth);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    // this refresh the token when expired
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndLogin().then(() => {
      if (this.tokenIsValid()) {
        let token = this.oAuthService.getAccessToken();
        this.authRepository.updateIsLoggedIn(!!token);
        this.getLoggedInUserProfileInfo().pipe(take(1)).subscribe();
      }
    });
  }

  login() {
    this.oAuthService.initLoginFlow();
  }

  tokenIsValid() {
    let hasValidAccessToken = this.oAuthService.hasValidAccessToken();
    let hasValidIdToken = this.oAuthService.hasValidIdToken();
    return hasValidAccessToken && hasValidIdToken
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
          map(commonInfo => ({ tenants, commonInfo }))
        )
      }),
      tap((res) => {
        this.authRepository.updateUserTenants(res.tenants)
        this.authRepository.updateCurrentTenant(res.commonInfo)
      })
    )
  }

  impersonateUser() {
    this.impersonateUserTimeCounter();
    this.authRepository.updateIsPersona(true);
  }

  impersonateUserTimeCounter() {
    this.personaTimeExcitedListener$.next(false)
    let date = new Date();
    let startImpersonateTimeInterval = setInterval(() => {
      let minutesPassed = dateDiff(date).minutes;
      let secondsPassed = dateDiff(date).seconds;
      if (secondsPassed >= 10) {
        this.clearImpersonate();
        clearInterval(startImpersonateTimeInterval);
      }
    }, 1000)
  }

  clearImpersonate() {
    this.personaTimeExcitedListener$.next(true);
    this.authRepository.updateIsPersona(false);
  }

}
