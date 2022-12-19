import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkPortal, PortalModule} from "@angular/cdk/portal";
import {OpenSlot} from "../open-slot";

@Component({
  selector: 'kbm-sidebar-open-slot',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './sidebar-open-slot.component.html',
  styleUrls: ['./sidebar-open-slot.component.scss']
})
export class SidebarOpenSlotComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal) _testTpl!: CdkPortal;
  host = inject(OpenSlot);

  ngAfterViewInit(): void {
    if (!this.host.sidebarOpenSlot.hasAttached()) {
      this.host.sidebarOpenSlot.attach(this._testTpl);
    }
  }

  ngOnDestroy(): void {
    this.host.sidebarOpenSlot.detach();
  }
}
