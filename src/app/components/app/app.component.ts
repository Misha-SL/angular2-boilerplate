import { Component } from '@angular/core';
import { Router } from '@angular/router';

const template = require('./app.component.html');

@Component({
  selector: 'my-app',
  template: template
})

export class AppComponent {
  constructor(public router: Router) {}
}

export default AppComponent;