import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { WindowService } from '../../services/window.service';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

//const styles = require('./home.component.scss');
const template = require('./home.component.html');

@Component({
  selector: 'home',
  template: template,
  //styles: [ styles ]
})
export class HomeComponent { 
  jwt: string;
  response: string;
  window: WindowService;

  constructor(
    public router: Router, 
    public http: Http, 
    public authHttp: AuthHttp,
    public winRef: WindowService
  ) {
    this.jwt = localStorage.getItem('id_token');
    this.window = winRef.nativeWindow;
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  callVersionApi() {
    this.callApi('http://localhost:8081/api/version');
  }

  callInfoApi() {
    this.callPotectedApi('http://localhost:8081/api/info');
  }

  callInfoApi_anonymus() {
    this.callApi('http://localhost:8081/api/info');
  }

  callPotectedApi(url: string) {
    this.response = null;
    // For non-protected routes, just use Http
    // For protected routes, use AuthHttp
    this.authHttp.get(url)
      .subscribe(
        response => this.response = response.text(),
        error => this.response = error.text()
      );
  }
  callApi(url: string) {
    this.response = null;
    // For non-protected routes, just use Http
    // For protected routes, use AuthHttp
    this.http.get(url)
      .subscribe(
        response => this.response = response.text(),
        error => this.response = error.text()
      );
  }
}
export default HomeComponent;
