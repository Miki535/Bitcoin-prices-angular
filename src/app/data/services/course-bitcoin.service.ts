import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from './interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseBitcoinService {
  http :HttpClient = inject(HttpClient)
  constructor() { }

  getBitcoinCourse() {
    return this.http.get<Profile[]>("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
  }
}
