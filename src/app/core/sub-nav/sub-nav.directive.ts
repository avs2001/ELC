import { Directive, TemplateRef, Input } from '@angular/core';
import { OpenSlots } from './open-slot.interface';
import { SubNavService } from "./sub-nav.service";

@Directive({
  selector: '[kbmSubNav]',
  standalone: true
})
export class SubNavDirective {
  openSlots: OpenSlots[] = [];
  template: any
  @Input() set kbmSubNav(openSlots: OpenSlots[]) {
    this.openSlots = this.openSlots.concat(openSlots)
  };

  constructor(
    readonly tpl: TemplateRef<any>,
    private readonly subNavService: SubNavService) {
    this.template = tpl;
  }

  ngOnInit() {
    if (this.openSlots.includes(OpenSlots.SUB_NAV_SLOT)) {
      this.subNavService.tpl = this.template;
    }

    if (this.openSlots.includes(OpenSlots.FOOTER_SLOT)) {
      this.subNavService.tplFooter = this.template
    }
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
    this.subNavService.clear();
  }

}
