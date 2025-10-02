import { Component } from '@angular/core';
import { AboutDescriptionComponent } from '../about-description-component/about-description-component';
import { AboutImageComponent } from '../about-image-component/about-image-component';
import { AboutOurTeamComponent } from '../about-our-team-component/about-our-team-component';
import { OurValueAboutComponent } from '../our-value-about-component/our-value-about-component';
import { AboutJoinTeamComponent } from '../about-join-team-component/about-join-team-component';

@Component({
  standalone: true,
  selector: 'app-about-page-component',
  imports: [
    AboutDescriptionComponent,
    AboutImageComponent,
    AboutOurTeamComponent,
    OurValueAboutComponent,
    AboutJoinTeamComponent,
  ],
  templateUrl: './about-page-component.html',
  styleUrl: './about-page-component.css',
})
export class AboutPageComponent {}
