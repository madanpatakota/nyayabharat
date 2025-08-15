import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LawSectionIndex } from '../../../../app/models/law-section.model';

@Injectable({ providedIn: 'root' })
export class BnsDataService {
  private base = 'assets/data/bns';

  constructor(private http: HttpClient) {}

  getIndex(lang: 'en' | 'hi' = 'en'): Observable<LawSectionIndex[]> {
    return this.http.get<LawSectionIndex[]>(`${this.base}/index.${lang}.json`);
  }

  getOverview(id: number, lang: 'en' | 'hi' = 'en'): Observable<{id:number; number:string; title:string; body:string}> {
    return this.http.get<{id:number; number:string; title:string; body:string}>(`${this.base}/sections/${id}/overview.${lang}.json`);
  }

  searchIndex(q: string, list: LawSectionIndex[]): LawSectionIndex[] {
    const s = q.trim().toLowerCase();
    if (!s) return list;
    return list.filter(x =>
      x.title.toLowerCase().includes(s) ||
      x.number.toLowerCase().includes(s) ||
      x.tags.some(t => t.toLowerCase().includes(s))
    );
  }
}
