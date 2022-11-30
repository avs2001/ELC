import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultOAuthInterceptor implements HttpInterceptor {

    constructor(
        private oAuthService: OAuthService
    ) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.oAuthService.getAccessToken();
        if (token) {
            let header = 'Bearer ' + token;
            let headers = req.headers
                .set('Authorization', header);

            req = req.clone({ headers });
        }

        return next.handle(req)

    }

}