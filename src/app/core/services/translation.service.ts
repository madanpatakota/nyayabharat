import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface TranslationBulkResponse {
  fieldName: string;
  translatedText: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

private baseUrl = `${environment.apiBaseUrl}/api/translations`;

  constructor(private http: HttpClient) {}

  /** Single translation (optional use) */
  getTranslation(
    entityType: string,
    entityId: number,
    fieldName: string,
    lang: string
  ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`, {
      params: {
        entityType,
        entityId,
        fieldName,
        lang
      }
    });
  }

  /** BULK translations – THIS IS WHAT UI SHOULD USE */
  getBulkTranslations(
    entityType: string,
    entityId: number,
    fieldNames: string[],
    lang: string
  ): Observable<{ data: TranslationBulkResponse[] }> {
    return this.http.post<{ data: TranslationBulkResponse[] }>(
      `${this.baseUrl}/bulk`,
      {
        entityType,
        entityId,
        fieldNames,
        languageCode: lang
      }
    );
  }
}
