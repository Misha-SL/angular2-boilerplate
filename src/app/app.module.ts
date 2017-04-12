import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthService } from './services/auth.service';
import { WindowService } from './services/window.service';
import { routes } from './app.routes';

import { AppComponent }  from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, LoginComponent, HeaderComponent ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    WindowService,
    AuthService, 
    ...AUTH_PROVIDERS
  ]
  
  
})

export class AppModule { }