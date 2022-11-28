import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environment/environment';
import { Observable, map } from 'rxjs';
import { CommonInfo, UserTenant } from '../auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly oAuthService: OAuthService,
    private readonly http: HttpClient
  ) { }

  async login() {
    this.oAuthService.configure(environment.auth);
    const token = await this.oAuthService
      .loadDiscoveryDocumentAndLogin()
      .then(() => this.oAuthService.getAccessToken());
  }

  public userTenants(): Observable<UserTenant[]> {
    return this.http.get<{ result: UserTenant[] }>(`/api/common/user-tenants`).pipe(
      map(({ result }) => result),
    );
  }

  public getCommonInfo(organizationId: string): Observable<CommonInfo> {
    const headers = new HttpHeaders({
      'X-OrganizationId': organizationId,
    });
    return this.http.get<CommonInfo>(`/api/common/info`, { headers });
  }

}
