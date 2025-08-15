import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApi = 'http://localhost:8080/login'; // Replace with your actual login API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = {
      "username": username,
      "password": password
    };
    // Assuming the API expects a JSON object with username and password
    return this.http.post<any>(this.loginApi, loginRequest);
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  register(username: string, password: string, isAdmin: boolean): Observable<any> {
    const registerRequest = {
      "username": username,
      "password": password,
      "admin": isAdmin
    };
    return this.http.post<any>('http://localhost:8080/register', registerRequest);
  }
}
