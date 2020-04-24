import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../interfaces/company';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _url = "http://192.168.1.130:8000/api/companies/"
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this._url)
  }

  getCompany(id): Observable<Company> {
    return this.http.get<Company>(this._url + id + '/')
  }

  getVacancies(id): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this._url + id + '/vacancies/')
  }
}
