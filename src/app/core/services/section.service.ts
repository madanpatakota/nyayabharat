import { Observable, of } from "rxjs";
import { SectionParallel } from "../models/section-parallel.model";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SectionService {

  constructor(private api: ApiService) {}

  /* ================================
     REAL API METHODS
     ================================ */

  getSectionsByAct(actId: number): Observable<{ Data: any[] }> {
    return this.api.get(`/sections/by-act/${actId}`);
  }

  getSectionById(sectionId: number): Observable<{ Data: any }> {
    return this.api.get(`/sections/${sectionId}`);
  }

  getSectionContent(sectionId: number): Observable<{ Data: any[] }> {
    return this.api.get(`/sections/${sectionId}/content`);
  }

  /* ================================
     IPC ↔ BNS / CRPC ↔ BNSS
     ================================ */

  getParallelSection(
    sectionId: number,
    target: 'BNS' | 'BNSS'
  ): Observable<SectionParallel> {
    return this.api.get(
      `/sections/${sectionId}/parallel`,
      { target }
    );
  }

  /* ================================
     DUMMY METHODS (REMOVE LATER)
     ================================ */

  getDummySectionsByChapter(chapterId: number): Observable<any[]> {
    const dummySections = [
      { sectionId: 1, chapterId: 101, sectionNumber: '1', sectionTitle: 'Title and extent' },
      { sectionId: 2, chapterId: 101, sectionNumber: '2', sectionTitle: 'Punishments' },
      { sectionId: 3, chapterId: 102, sectionNumber: '3', sectionTitle: 'General explanations' }
    ];
    return of(dummySections.filter(s => s.chapterId === chapterId));
  }

  getDummySectionById(sectionId: number): Observable<any> {
    const dummy = [
      {
        sectionId: 1,
        sectionNumber: '1',
        sectionTitle: 'Title and extent',
        sectionText: 'This section describes the title and extent of the Act.',
        simpleExplanation: 'Explains where and to whom the law applies.'
      }
    ];
    return of(dummy.find(s => s.sectionId === sectionId));
  }


  getSectionsByChapter(chapterId: number) {
  return this.api.get(`/sections/by-chapter/${chapterId}`);
}


/* ================================
   BOOKMARK
   ================================ */

toggleBookmark(sectionId: number) {
  return this.api.post(`/sections/${sectionId}/bookmark`, {});
}

getBookmarkStatus(sectionId: number) {
  return this.api.get(`/sections/${sectionId}/bookmark`);
}


/* ================================
   JUDGMENTS
   ================================ */

getJudgmentsBySection(sectionId: number) {
  return this.api.get(`/sections/${sectionId}/judgments`);
}

/* ================================
   APPEAL RIGHTS
   ================================ */

getAppealRightsBySection(sectionId: number) {
  return this.api.get(`/sections/${sectionId}/appeal-rights`);
}


}
