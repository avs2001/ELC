import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DrawerComponent} from "./shared/ui-components/drawer/drawer.component";
import {ContentComponent} from "./shared/ui-components/content/content.component";
import {SideComponent} from "./shared/ui-components/side/side.component";
import {LayoutComponent} from "./core/layout/layout.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    DrawerComponent,
    ContentComponent,
    SideComponent,
    LayoutComponent,
    NgClass
  ],
  standalone: true

})
export class AppComponent {
  title = 'ELC';
  open: any = false;
}
