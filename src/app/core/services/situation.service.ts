import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Situation } from 'src/app/core/models/situation.model';

@Injectable({ providedIn: 'root' })
export class SituationService {

  constructor(private api: ApiService) {}

  /* ================================
     GET ALL SITUATIONS
     ================================ */
  // getAllSituations(): Observable<{ Data: Situation[] }> {
  //   return this.api.get('/situations');
  // }

  getAllSituations() {
  return this.api.get<any>('/situations').pipe(
    map(res => ({
      Data: res.Data.map((s: any) => ({
        id: s.situationId,          // 🔥 FIX HERE
        title: s.title,
        description: s.description,
        category: s.category,
        severity: s.severity
      }))
    }))
  );
}

  /* ================================
     GET SITUATION BY ID
     ================================ */
  getSituationById(id: number): Observable<{ Data: Situation }> {
    return this.api.get(`/situations/${id}`);
  }

  /* ================================
     GET SECTIONS RELATED TO SITUATION
     ================================ */
  getSituationSections(id: number): Observable<{ Data: any[] }> {
    return this.api.get(`/situations/${id}/sections`);
  }

  /* ================================
     OPTIONAL (KEEP FOR LATER)
     ================================ */
  getSituationsBySeverity(severity: number) {
    return this.api.get(`/situations/severity/${severity}`);
  }

  getSituationLaw(id: number) {
    return this.api.get(`/situations/${id}/law`);
  }

  /* ================================
   GET SITUATIONS BY SECTION
   ================================ */
getSituationsBySection(sectionId: number): Observable<{ Data: any[] }> {
  return this.api.get(`/sections/${sectionId}/situations`);
}

}
