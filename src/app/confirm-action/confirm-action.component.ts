import {Component, Inject, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {CommonModule, NgTemplateOutlet} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {CONFIRM_DIALOG_TPL} from "./tokens";

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgTemplateOutlet, MatButtonModule],
})
export class ConfirmActionComponent {
  constructor(
    @Inject(CONFIRM_DIALOG_TPL) readonly tpl: TemplateRef<any>,
    @Inject(MAT_DIALOG_DATA) readonly data: any,
    private readonly ref: MatDialogRef<any>
  ) {
  }

  createContext() {
    return {
      $implicit: {
        close: (resolution: boolean) => this.ref.close(resolution)
      }
    }
  }
}
