import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { ConfirmActionDirective } from '../UI/confirm-action/confirm-action.directive';

@Component({
  selector: 'kbm-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, ConfirmActionDirective],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() data: any[] = [];
  @Input() btns: TemplateRef<any>[] = []
  displayedColumns = ['id', 'name', 'username', 'email', 'btns'];

  delete(event: any) {

  }
}
