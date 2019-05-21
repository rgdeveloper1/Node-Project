import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerURL = 'http://localhost:8100/api/register';
  private loginURL = 'http://localhost:8100/api/login';

  constructor(private http: HttpClient) { }

  register(userData) {
    return this.http.post<any>(this.registerURL, userData);
  }

  login(loginDetails) {
    return this.http.post(this.loginURL, loginDetails);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
