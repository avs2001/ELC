import {CdkPortalOutlet} from "@angular/cdk/portal";

export abstract class OpenSlot {
  abstract sidebarOpenSlot: CdkPortalOutlet;
  abstract navbarOpenSlot: CdkPortalOutlet;
}
