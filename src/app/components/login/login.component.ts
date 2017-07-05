import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
//import { contentHeaders } from '../common/headers';

const styles   = require('./login.component.css');
const template = require('./login.component.html');

@Component({
  selector: 'login',
  template: template,
  //styles: [ styles ]
})
export class LoginComponent {
  constructor(public router: Router, public http: Http) {
  }

  login(event: Event, username: string, password: string) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    console.log("login body", body);
    
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8081/api/signin', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log("Done:", response.json().id_token);
          //localStorage.setItem('access_token', response.json().id_token)
          //localStorage.setItem('token', response.json().id_token);
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error.text());
        }
      );
  }

  signup(event: Event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
export default LoginComponent;