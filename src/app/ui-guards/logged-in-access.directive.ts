import { LoggedInCase } from '../auth/auth.model';
import { take, Subject, takeUntil } from 'rxjs';
import { AuthRepository } from '../auth/auth.repository';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[loggedInUIAccess]'
})
export class LoggedInUIAccessDirective {
    @Input() set loggedInUIAccess(loggedIn: LoggedInCase) {
        this.loggedIn = loggedIn;
    }

    loggedIn: LoggedInCase

    private unsubscribe$ = new Subject();
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authRepository: AuthRepository
    ) {
    }

    ngOnInit() {
        this.authRepository.isLoggedIn$.pipe(takeUntil(this.unsubscribe$)).subscribe(isLoggedIn => {
            if ((isLoggedIn && this.loggedIn === LoggedInCase.USER_LOGGED_IN) ||
                (!isLoggedIn && this.loggedIn === LoggedInCase.USER_NOT_LOGGED_IN)) {
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
