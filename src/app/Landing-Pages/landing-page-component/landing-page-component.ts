import { Component } from '@angular/core';
import { HeaderComponent } from '../header-component/header-component';
import { GetStartedComponent } from '../get-started-component/get-started-component';
import { CompaniesComponent } from '../companies-component/companies-component';
import { SolutionsComponent } from '../solutions-component/solutions-component';
import { TrackRecordComponent } from '../track-record-component/track-record-component';
import { FeaturesComponent } from '../features-component/features-component';
import { MessageComponent } from '../message-component/message-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-landing-page-component',
  imports: [
    HeaderComponent,
    GetStartedComponent,
    CompaniesComponent,
    SolutionsComponent,
    TrackRecordComponent,
    FeaturesComponent,
    MessageComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page-component.html',
  styleUrl: './landing-page-component.css',
})
export class LandingPageComponent {}
