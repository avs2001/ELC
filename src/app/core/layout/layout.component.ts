import { Component, forwardRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavComponent } from "../sub-nav/sub-nav.component";
import { RouterLink } from "@angular/router";
import { OpenSlot } from "../open-slot";
import { CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { Observable } from 'rxjs'
import { LayoutPortal, LayoutService } from './layout.service';

@Component({
  selector: 'kbm-layout',
  standalone: true,
  imports: [CommonModule, SubNavComponent, RouterLink, PortalModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [
    { provide: OpenSlot, useExisting: forwardRef(() => LayoutComponent) }
  ]
})
export class LayoutComponent implements OpenSlot {
  subNavPortal$!: Observable<LayoutPortal>;
  footerPortal$!: Observable<LayoutPortal>;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.subNavPortal$ = this.layoutService.subNavPortal$;
    this.footerPortal$ = this.layoutService.footerPortal$;
  }

}
