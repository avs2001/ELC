import {
    TemplatePortal,
    ComponentPortal,
    DomPortal,
} from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export type LayoutPortal = TemplatePortal | ComponentPortal<any> | DomPortal;

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private subNavPortal = new Subject<LayoutPortal>();
    readonly subNavPortal$ = this.subNavPortal.asObservable();

    private footerPortal = new Subject<LayoutPortal>();
    readonly footerPortal$ = this.footerPortal.asObservable();

    constructor() { }

    setSubNavPortal(portal: LayoutPortal) {
        this.subNavPortal.next(portal);
    }

    setFooterPortal(portal: LayoutPortal) {
        this.footerPortal.next(portal);
    }
}
