import { LayoutService } from './../layout/layout.service';
import { AfterViewInit, Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortal, PortalModule } from "@angular/cdk/portal";
import { OpenSlot } from "../open-slot";

@Component({
  selector: 'kbm-footer-open-slot',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './footer-open-slot.component.html',
  styleUrls: ['./footer-open-slot.component.scss']
})
export class FooterOpenSlotComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild(CdkPortal) portalContent!: CdkPortal;
  host = inject(OpenSlot);

  constructor(private layoutService: LayoutService) {

  }

  ngAfterViewInit(): void {
    this.layoutService.setFooterPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }
}

