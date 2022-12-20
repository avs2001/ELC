import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrawerComponent} from "../../shared/ui-components/drawer/drawer.component";
import {SideComponent} from "../../shared/ui-components/side/side.component";
import {ContentComponent} from "../../shared/ui-components/content/content.component";
import {ToolbarComponent} from "../../shared/ui-components/toolbar/toolbar.component";
import {WlSidebarComponent} from "../wl-sidebar/wl-sidebar.component";

@Component({
  selector: 'kbm-layout',
  standalone: true,
  imports: [CommonModule, DrawerComponent, SideComponent, ContentComponent, ToolbarComponent, WlSidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
