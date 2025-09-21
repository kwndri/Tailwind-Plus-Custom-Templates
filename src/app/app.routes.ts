import { Routes } from '@angular/router';
import { NotFoundComponent } from './404-Pages/not-found-component/not-found-component';
import { LandingPageComponent } from './Landing-Pages/landing-page-component/landing-page-component';
import { LoginComponent } from './Login-Page/login-component/login-component';
import { SignUpComponent } from './Landing-Pages/sign-up-component/sign-up-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
