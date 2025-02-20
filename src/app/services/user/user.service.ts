import { Injectable } from '@angular/core';
import { appSettings } from '../../settings/app.settings';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = appSettings.APP_URL;

  constructor(private http:HttpClient) { }

  //Add user in cache
  public addUsersToLocalCache(users:User[]):void{
    localStorage.setItem('user', JSON.stringify(users))
  }

  //Si je vais dans mon cache local et que je récupére un item de users, sinon je retourne un tableau vide
  public getUsersFromLocalCache():User[]{
    if (localStorage.getItem('users')) {
      return JSON.parse(localStorage.getItem('users')!);
    } else {
      return [];
    }
  }
}
