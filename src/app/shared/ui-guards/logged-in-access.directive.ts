import { AuthRepository } from '../../pages/auth/auth.repository';
import { LoggedInCase } from '../../pages/auth/auth.model';
import { take, Subject, takeUntil } from 'rxjs';
import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { USER_STORE } from 'src/app/tokens';

@Directive({
    selector: '[loggedInUIAccess]'
})
export class LoggedInUIAccessDirective {
    @Input() set loggedInUIAccess(loggedInCase: LoggedInCase) {
        this.loggedInCase = loggedInCase;
    }

    loggedInCase: LoggedInCase

    private unsubscribe$ = new Subject();
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        @Inject(USER_STORE) private authRepository: AuthRepository
    ) {
    }

    ngOnInit() {
        this.authRepository.isLoggedIn$.pipe(takeUntil(this.unsubscribe$)).subscribe(isLoggedIn => {
            if ((isLoggedIn && this.loggedInCase === LoggedInCase.USER_LOGGED_IN) ||
                (!isLoggedIn && this.loggedInCase === LoggedInCase.USER_NOT_LOGGED_IN)) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        })
    }

    ngOnDestroy() {
        this.unsubscribe$.complete();
        this.unsubscribe$.unsubscribe();
    }

}
