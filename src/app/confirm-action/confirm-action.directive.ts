import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ConfirmActionComponent } from './confirm-action.component';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[confirmAction]',
  standalone: true
})
export class ConfirmActionDirective {

  @Output() confirm = new EventEmitter();

  @HostListener('click')
  doConfirm() {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {});
    dialogRef.afterClosed().subscribe((confirmed: any) => {
      this.confirm.emit(confirmed);
    });
  }

  constructor(private dialog: MatDialog) { }
}
