import { Component, signal } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';
import { Team } from '../../../model';

@Component({
  standalone: true,
  selector: 'app-our-team-component',
  imports: [IconsComponent],
  templateUrl: './our-team-component.html',
  styleUrl: './our-team-component.css',
})
export class OurTeamComponent {
  team = signal<Team[]>([
    {
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Leonard Krasner',
      title: 'Senior Designer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Floyd Miles',
      title: 'Principal Designer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Emily Selman',
      title: 'VP, User Experience',
    },
    {
      image:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Kristin Watson',
      title: 'VP, Human Resources',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Emma Dorsey',
      title: 'Senior Developer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Alicia Bell',
      title: 'Junior Copywriter',
    },
  ]);
}
