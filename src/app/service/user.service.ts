import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupUser } from '../interface/signup-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<SignupUser[]> {
    return this.http.get<SignupUser[]>('http://localhost:3000/User');
  }
  getUser(): Observable<SignupUser> {
    return this.http.get<SignupUser>('http://localhost:3000/User/1');
  }
}
