import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavComponent} from "../sub-nav/sub-nav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'kbm-layout',
  standalone: true,
  imports: [CommonModule, SubNavComponent, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
