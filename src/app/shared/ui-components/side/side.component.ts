import {Component, ContentChild, HostBinding, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PolymorpheusModule} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'kbm-side',
  standalone: true,
  imports: [CommonModule, PolymorpheusModule],
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  @HostBinding('class.opened')
  opened!: boolean;

  @ContentChild(TemplateRef) tpl!: TemplateRef<any>;

  getContext() {
    return {$implicit: this.opened}
  }
}
