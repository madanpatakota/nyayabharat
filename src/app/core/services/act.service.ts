import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Act } from '../models/act.model';

@Injectable({
  providedIn: 'root'
})
export class ActService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // GET ALL ACTS
  getAllActs(): Observable<Act[]> {
    return this.http.get<Act[]>(`${this.baseUrl}/api/acts`);
  }

  // GET ACTIVE ACTS
  getActiveActs(): Observable<Act[]> {
    return this.http.get<Act[]>(`${this.baseUrl}/api/acts/active`);
  }

  // GET ACT DETAILS
  getActById(actId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/acts/${actId}`);
  }
}
