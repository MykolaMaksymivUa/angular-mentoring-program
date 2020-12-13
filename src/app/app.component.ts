import { Component } from '@angular/core';
import { SpinnerService } from './core/widgets';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Web-School';
  constructor(
    public spinner: SpinnerService,
  ) { }
}
