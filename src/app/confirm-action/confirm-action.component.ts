import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule]
})
export class ConfirmActionComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }
}
