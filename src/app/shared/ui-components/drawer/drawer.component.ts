import {AfterContentInit, Component, ContentChild, forwardRef, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideComponent} from "../side/side.component";
import {ContentComponent} from "../content/content.component";

export abstract class DrawerService {
  abstract toggle(): void;
}

@Component({
  selector: 'kbm-drawer',
  exportAs: 'drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  providers: [
    {provide: DrawerService, useExisting: forwardRef(() => DrawerComponent)}
  ]
})
export class DrawerComponent implements DrawerService, AfterContentInit {
  @HostBinding('class.open')
  @Input() open = true;


  @ContentChild(SideComponent) side!: SideComponent;
  @ContentChild(ContentComponent) content!: SideComponent;

  @HostBinding("style.--width.px")
  @Input() width: number = 250;

  @HostBinding("style.--collapsed-width.px")
  @Input() collapsedWidth: number = 50;

  @HostBinding("style.--open-position.px")
  get openPos() {
    return this.width - this.collapsedWidth;
  }

  @HostBinding("style.--closed-position.px")
  get closedPos() {
    return this.collapsedWidth - this.width;
  }

  toggle() {
    this.open = !this.open;
    this.side.opened = this.open;
  }

  ngAfterContentInit(): void {
    this.side.opened = this.open;
  }
}
