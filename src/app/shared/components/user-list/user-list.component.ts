import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {ConfirmActionDirective} from '../UI/confirm-action/confirm-action.directive';
import {ListActionsDirective} from "../list-actions.directive";

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


  displayedColumns = ['id', 'name', 'username', 'email'];
  actionsTpl!: TemplateRef<any>;

  @ContentChild(ListActionsDirective)
  set actions(action: ListActionsDirective) {
    if (action) {
      this.actionsTpl = action.tpl;
      this.displayedColumns.push('btns');
    }
  }


  delete(event: any) {

  }
}
