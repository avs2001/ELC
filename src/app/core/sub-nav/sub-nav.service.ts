import {Injectable, TemplateRef} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubNavService {

  tplRef = new ReplaySubject<TemplateRef<any> | null>();
  tpl$ = this.tplRef.asObservable();

  tplFooterRef = new ReplaySubject<TemplateRef<any> | null>();
  tplFooter$ = this.tplFooterRef.asObservable();

  set tpl(template: TemplateRef<any>) {
    this.tplRef.next(template);
  }

  set tplFooter(template: TemplateRef<any>) {
    this.tplFooterRef.next(template);
  }

  clear(): void {
    this.tplRef.next(null);
    this.tplFooterRef.next(null);
  }
}
