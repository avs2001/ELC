import {Injectable, TemplateRef} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubNavService {

  tplRef = new ReplaySubject<TemplateRef<any> | null>();
  tpl$ = this.tplRef.asObservable();

  set tpl(template: TemplateRef<any>) {
    console.log(template);
    this.tplRef.next(template);
  }

  clear(): void {
    this.tplRef.next(null);
  }
}
