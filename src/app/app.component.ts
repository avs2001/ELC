import {Component} from '@angular/core';

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELC';

  delete($event: boolean) {
    console.log('CAN DELETE:', $event);
  }
}
