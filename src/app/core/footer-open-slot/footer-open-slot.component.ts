import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, inject, Injector, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortal, DomPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { OpenSlot } from "../open-slot";

@Component({
  selector: 'kbm-footer-open-slot',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './footer-open-slot.component.html',
  styleUrls: ['./footer-open-slot.component.scss']
})
export class FooterOpenSlotComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) _testTpl!: CdkPortal;
  host = inject(OpenSlot);

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngAfterViewInit(): void {
    this.host.footerOpenSlot = new DomPortalOutlet(
      document.querySelector('#footerslot')!,
      this.cfr,
      this.appRef,
      this.injector
    );
    this.host.footerOpenSlot.attach(this._testTpl);
  }

  ngOnDestroy(): void {
    this.host.navOpenSlot.detach();
  }

}
