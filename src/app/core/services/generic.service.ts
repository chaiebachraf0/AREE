import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  baseUrl = environment.backend.baseUrl;

  constructor(private http: HttpClient) {}

  Login(object: any): Observable<any> {
    const headers = new HttpHeaders({});
    return this.http.post(`${this.baseUrl}` + '/CreateSession', object, {
      headers: headers,
    });
  }
  getCounter(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Aree-Session': this.getToken(),
    });
    return this.http.get(`${this.baseUrl}` + '/meters', {
      headers: headers,
    });
  }

  getToken(): string {
    const accessToken = localStorage.getItem('X-Aree-Session');
    return accessToken ? accessToken : '';
  }
}
