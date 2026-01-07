import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // GET CHAPTERS BY ACT
  getChaptersByAct(actId: number): Observable<Chapter[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/api/chapters/by-act/${actId}`
    );
  }

  // (OPTIONAL – FUTURE)
  getChapterById(chapterId: number): Observable<Chapter> {
    return this.http.get<any>(
      `${this.baseUrl}/api/chapters/${chapterId}`
    );
  }
}
