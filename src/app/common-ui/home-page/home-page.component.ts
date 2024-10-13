import { Component, input } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  @input() profile!: Profile;
}
