import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkPortal, PortalModule} from "@angular/cdk/portal";
import {OpenSlot} from "../open-slot";

@Component({
  selector: 'kbm-nav-open-slot',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './nav-open-slot.component.html',
  styleUrls: ['./nav-open-slot.component.scss']
})
export class NavOpenSlotComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) _testTpl!: CdkPortal;
  host = inject(OpenSlot);

  ngAfterViewInit(): void {
    if (!this.host.navOpenSlot.hasAttached()) {
      this.host.navOpenSlot.attach(this._testTpl);
    }
  }

  ngOnDestroy(): void {
    this.host.navOpenSlot.detach();
  }

}
