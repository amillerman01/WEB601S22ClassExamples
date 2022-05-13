import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<h1>New heading!</h1>';
  name: string; // this variable will now always be a string
  tertiaryName = 'Alex'; // this variable will ALSO now always be a string

  constructor() {

    this.name = 'Peter';

    let secondaryName: string;
    secondaryName = 'Andrew';

    // can't do this becasue tertiaryName is a string type
    // this.tertiaryName = 1;
  }
}
