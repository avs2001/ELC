import { LayoutPortal } from './layout/layout.service';
import { Observable } from 'rxjs';

export abstract class OpenSlot {
  abstract subNavPortal$: Observable<LayoutPortal>;
  abstract footerPortal$: Observable<LayoutPortal>;

}
