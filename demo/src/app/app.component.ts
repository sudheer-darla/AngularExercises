import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: ` <h2>I am from Inline template</h2> `,
  styleUrl: './app.component.css',
  // styles: `
  // h2{

  //   color: red;
  // }
  // `,
})
export class AppComponent {
  title = 'demo';
  name: string = 'Angular';
  count: number = 50;
  disableFlag: boolean = true;
  loggedIn = false;
  constructor() {
    setTimeout(() => {
      this.disableFlag = false;
    }, 5000);
  }

  doLogin() {
    this.loggedIn = true;
  }

  OnEnter(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
}
