import { DomPortalOutlet } from "@angular/cdk/portal";

export abstract class OpenSlot {
  abstract navOpenSlot: DomPortalOutlet;
  abstract footerOpenSlot: DomPortalOutlet;
}
