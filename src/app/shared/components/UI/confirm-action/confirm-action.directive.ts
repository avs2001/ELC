import {Directive, EventEmitter, HostListener, inject, Injector, Input, Output, TemplateRef} from '@angular/core';
import {ConfirmActionComponent} from './confirm-action.component';
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {CONFIRM_DIALOG_TPL} from "./tokens";

@Directive({
  selector: '[confirmAction]',
  standalone: true
})
export class ConfirmActionDirective {
  private readonly dialog = inject(MatDialog);
  @Output() readonly confirmAction = new EventEmitter<boolean>();
  customMessage!: TemplateRef<any>;

  @Input() title: string = "Confirmation";
  @Input() msg: string = "Confirm?";
  @Input() confirmBtnTxt: string = "OK";
  @Input() declineBtnTxt: string = "CANCEL";

  @Input() set content(tpl: TemplateRef<unknown>) {
    this.customMessage = tpl;
  }

  @HostListener('click')
  doConfirm() {
    const injector = Injector.create({
      providers: [{provide: CONFIRM_DIALOG_TPL, useValue: this.customMessage}],
    })


    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      injector,
      disableClose: true,
      data: {
        title: this.title,
        msg: this.msg,
        confirmBtnTxt: this.confirmBtnTxt,
        declineBtnTxt: this.declineBtnTxt,
      }
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe((confirmed: any) => {
      this.confirmAction.emit(confirmed);
    });
  }
}
