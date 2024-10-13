import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./common-ui/home-page/home-page.component";
import { CourseBitcoinService } from './data/services/course-bitcoin.service';
import {JsonPipe} from "@angular/common";
import { Profile } from './data/services/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService: CourseBitcoinService = inject(CourseBitcoinService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getBitcoinCourse().subscribe((val: any) => {
      this.profiles = val;
    });
  }
}
