import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "http://192.168.1.130:8000"

  private httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    return this.http.post<User>(`${this._url}/api/login/`, user, this.httpHeaders)
  }
}
