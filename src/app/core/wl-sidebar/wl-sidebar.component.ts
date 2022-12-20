import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'kbm-wl-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wl-sidebar.component.html',
  styleUrls: ['./wl-sidebar.component.scss']
})
export class WlSidebarComponent {

  @Input()
  @HostBinding('class.opened')
  open!: boolean;
}
