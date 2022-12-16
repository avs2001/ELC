import { LayoutService } from './../layout/layout.service';
import { AfterViewInit, Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortal, PortalModule } from "@angular/cdk/portal";
import { OpenSlot } from "../open-slot";

@Component({
  selector: 'kbm-nav-open-slot',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './nav-open-slot.component.html',
  styleUrls: ['./nav-open-slot.component.scss']
})
export class NavOpenSlotComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) portalContent!: CdkPortal;
  host = inject(OpenSlot);

  constructor(private layoutService: LayoutService) {

  }

  ngAfterViewInit(): void {
    this.layoutService.setSubNavPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }

}
