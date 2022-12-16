import {Component, forwardRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubNavComponent} from "../sub-nav/sub-nav.component";
import {RouterLink} from "@angular/router";
import {OpenSlot} from "../open-slot";
import {CdkPortalOutlet, PortalModule} from "@angular/cdk/portal";

@Component({
  selector: 'kbm-layout',
  standalone: true,
  imports: [CommonModule, SubNavComponent, RouterLink, PortalModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [
    {provide: OpenSlot, useExisting: forwardRef(() => LayoutComponent)}
  ]
})
export class LayoutComponent implements OpenSlot {
  @ViewChild(CdkPortalOutlet) navOpenSlot!: CdkPortalOutlet;
}
