import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubNavService} from "./sub-nav.service";

@Component({
  selector: 'kbm-sub-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent {
  constructor(readonly subNavService: SubNavService) {
  }
}
