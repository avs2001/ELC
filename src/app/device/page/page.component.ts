import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavDirective} from "../../core/sub-nav/sub-nav.directive";

@Component({
  selector: 'kbm-page',
  standalone: true,
  imports: [CommonModule, SubNavDirective],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}
