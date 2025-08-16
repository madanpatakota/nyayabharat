import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LawSectionIndex {
  id: number;
  number: string;
  slug: string;
  title: string;
  chapter: string;
  tags: string[];
  badges: { cognizable: boolean; bailable: boolean; compoundable: boolean };
}

@Injectable({ providedIn: 'root' })
export class CpcDataService {
  private base = 'assets/data/cpc';
  constructor(private http: HttpClient) {}

  getIndex(lang: 'en'|'hi'='en'): Observable<LawSectionIndex[]> {
    return this.http.get<LawSectionIndex[]>(`${this.base}/index.${lang}.json`);
  }

  getOverview(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<{id:number; number:string; title:string; body:string}>(`${this.base}/sections/${id}/overview.${lang}.json`);
  }

  // Civil-specific tabs
  getRelief(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<{summary?:string; remedies?:string[]}>(`${this.base}/sections/${id}/relief.${lang}.json`);
  }
  getProcedure(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<{steps?:string[]; notes?:string[]}>(`${this.base}/sections/${id}/procedure.${lang}.json`);
  }
  getExamples(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<Array<{title:string;facts:string;outcome?:string}>>(`${this.base}/sections/${id}/examples.${lang}.json`);
  }
  getJudgments(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<Array<{caseName:string;court:string;year:number;citation:string;summary?:string}>>(`${this.base}/sections/${id}/judgments.${lang}.json`);
  }
  getRelated(id: number, lang: 'en'|'hi'='en'){
    return this.http.get<Array<{id:number;number:string;title:string;slug?:string}>>(`${this.base}/sections/${id}/related.${lang}.json`);
  }
}
