import { Directive, EventEmitter, HostListener, Output, Input, TemplateRef } from '@angular/core';
import { ConfirmActionComponent } from './confirm-action.component';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[confirmAction]',
  standalone: true
})
export class ConfirmActionDirective {

  @Output() confirm = new EventEmitter();
  @Input() headerTemplateRef?: TemplateRef<any>

  @HostListener('click')
  doConfirm() {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {
        headerTemplateRef: this.headerTemplateRef
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: any) => {
      this.confirm.emit(confirmed);
    });
  }

  constructor(private dialog: MatDialog) { }
}
