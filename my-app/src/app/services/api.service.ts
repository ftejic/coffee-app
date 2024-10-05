import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getImage(): Observable<ApiData> {
    const apiUrl = 'http://localhost:3000/getImage';
    return this.http.get<ApiData>(apiUrl);
  }
}
