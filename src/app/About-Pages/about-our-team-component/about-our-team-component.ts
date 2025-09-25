import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-our-team-component',
  imports: [],
  templateUrl: './about-our-team-component.html',
  styleUrl: './about-our-team-component.css',
})
export class AboutOurTeamComponent {
  persons = [
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Leslie Alexander',
      title: 'Co-Founder / CEO',
      location: 'Toronto, Canada',
    },
    {
      src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Michael Foster',
      title: 'Co-Founder / CTO',
      location: 'Glasgow, Scotland',
    },
    {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Dries Vincent',
      title: 'Business Relations',
      location: 'Niagara Falls, Canada',
    },
    {
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      location: 'London, England',
    },
    {
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Courtney Henry',
      title: 'Designer',
      location: 'Toronto, Canada',
    },
    {
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Tom Cook',
      title: 'Director of Product',
      location: 'Toronto, Canada',
    },
    {
      src: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Whitney Francis',
      title: 'Copywriter',
      location: 'Toronto, Canada',
    },
    {
      src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      location: 'Toronto, Canada',
    },
  ];
}
