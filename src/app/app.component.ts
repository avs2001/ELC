import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELC';

  http = inject(HttpClient);

  users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');

  delete($event: boolean) {
    console.log('CAN DELETE:', $event);
  }
}
