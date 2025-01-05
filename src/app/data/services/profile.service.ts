import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient); // inject - запросить что-то, чтобы вводить

  baseApiUrl = 'http://og.ru/yt-course/';
  constructor() { }

  getTestAccounts() {
    // return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)

    return [
      {
        id: 123,
        userName: "Fill",
        avatarUrl: "",
        description: "Добавь в отслеживание (подпишись бесплатно), если сомневаешься в платной подписке! Вот увидишь, появится что-то, что точно заставит тебя подписаться по полной!)",
        subscriptionsAmount: 2,
        firstName: "Fill",
        lastName: "Grin",
        isActive: true,
        stack: [
          "HTML",
          "CSS"
        ],
        city: "New-York"
      }
    ]
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
  }
}
