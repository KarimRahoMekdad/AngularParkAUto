import { Injectable } from '@angular/core';
import { appSettings } from '../../settings/app.settings';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  public host = appSettings.APP_URL;
  private token: string = '';
  private loggedInUsername: string = '';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  public login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.host}api/auth/login`, user, { observe: 'response' });
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}api/auth/register`, user);
  }

  public logOut(): void {
    this.token = '';
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    if (!token || token.split('.').length !== 3) {
      console.error('Token JWT invalide:', token);
      return;
    }
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUsersFromLocalCache(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token') || '';
  }

  public getToken(): string {
    return this.token;
  }

  public isUserLoggedIn(): boolean {
    this.loadToken();

    if (!this.token || this.token.trim() === '') {
      this.logOut();
      return false;
    }

    try {
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      if (decodedToken?.sub && !this.jwtHelper.isTokenExpired(this.token)) {
        this.loggedInUsername = decodedToken.sub;
        return true;
      }
    } catch (error) {
      console.error('Erreur lors du décodage du JWT:', error);
    }

    this.logOut();
    return false;
  }
}
