import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, inject, Injector, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortal, DomPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { OpenSlot } from "../open-slot";

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

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngAfterViewInit(): void {
    this.host.navOpenSlot = new DomPortalOutlet(
      document.querySelector('#subnavslot')!,
      this.cfr,
      this.appRef,
      this.injector
    );
    this.host.navOpenSlot.attach(this._testTpl);
  }

  ngOnDestroy(): void {
    this.host.navOpenSlot.detach();
  }

}
