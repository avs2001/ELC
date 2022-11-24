import {Directive, TemplateRef} from '@angular/core';
import {SubNavService} from "./sub-nav.service";

@Directive({
  selector: '[kbmSubNav]',
  standalone: true
})
export class SubNavDirective {

  constructor(
    readonly tpl: TemplateRef<any>,
    private readonly subNavService: SubNavService) {
    this.template = tpl;
  }

  set template(tpl: TemplateRef<any>) {
    this.subNavService.tpl = tpl;
  }

  get template(): TemplateRef<any> {
    return this.tpl;
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
    this.subNavService.clear();
  }

}
