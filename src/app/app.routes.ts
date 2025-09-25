import { Routes } from '@angular/router';
import { NotFoundComponent } from './404-Pages/not-found-component/not-found-component';
import { LandingPageComponent } from './Landing-Pages/landing-page-component/landing-page-component';
import { LoginComponent } from './Login-Page/login-component/login-component';
import { SignUpComponent } from './Landing-Pages/sign-up-component/sign-up-component';
import { PricingPageComponent } from './Pricing-Pages/second-example/pricing-page-component/pricing-page-component';
import { AboutPageComponent } from './About-Pages/about-page-component/about-page-component';

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
    path: 'prices',
    component: PricingPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
