import { Component } from '@angular/core';
import { IconsComponent } from '../../icons/icons.component';

@Component({
  standalone: true,
  selector: 'app-message-component',
  imports: [IconsComponent],
  templateUrl: './message-component.html',
  styleUrl: './message-component.css',
})
export class MessageComponent {}
