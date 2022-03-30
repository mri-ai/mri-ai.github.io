import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bio Medical Image Lab';
  public constructor() {
    window.addEventListener('error', (event) => {
      console.log('The error is:::' + event)
    });
  }

}
