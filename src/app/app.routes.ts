import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'home',   component: HomeComponent, canActivate: [AuthService] },
  { path: 'about',   component: AboutComponent, canActivate: [AuthService] },
  { path: '**',     component: LoginComponent },
];
