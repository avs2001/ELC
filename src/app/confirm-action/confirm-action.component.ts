import { Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss'],
  standalone: true,
  imports: [MatDialogModule]
})
export class ConfirmActionComponent {
  @Input() title: string = "";
  @Input() msg: string = "";
  @Input() confirmBtnTxt: string = "";
  @Input() declineBtnTxt: string ="";
}
