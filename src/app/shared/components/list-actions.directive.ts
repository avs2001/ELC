import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[kbmListActions]',
  standalone: true
})
export class ListActionsDirective {

  constructor(readonly tpl: TemplateRef<Record<string, unknown>>) {
  }

}
