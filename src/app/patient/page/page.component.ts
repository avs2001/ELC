import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubNavDirective} from "../../core/sub-nav/sub-nav.directive";
import {NavOpenSlotComponent} from "../../core/nav-open-slot/nav-open-slot.component";

@Component({
  selector: 'kbm-page',
  standalone: true,
    imports: [CommonModule, SubNavDirective, NavOpenSlotComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}
