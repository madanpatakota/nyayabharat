import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionParallel } from 'src/app/core/models/section-parallel.model';
import { SectionService } from 'src/app/core/services/section.service';
import { SituationService } from 'src/app/core/services/situation.service';

//type SectionTab = 'explanation' | 'legal' | 'examples' | 'amendments';
type LawMode = 'IPC' | 'BNS' | 'CRPC' | 'BNSS';
type SectionTab =
  | 'explanation'
  | 'legal'
  | 'examples'
  | 'amendments'
  | 'judgments'
  | 'appeal';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss']
})

export class SectionDetailComponent implements OnInit {

  sectionId!: number;
  section: any;

  baseLaw!: 'IPC' | 'CRPC';
  currentLaw!: LawMode;

  parallelMapping?: any;
  parallelLoading = false;

  activeTab: SectionTab = 'explanation';
  relatedSituations: any[] = [];

  judgments: any[] = [];
appealRights: any[] = [];

judgmentsLoading = false;
appealLoading = false;

isBookmarked = false;
bookmarkLoading = false;



  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private situationService: SituationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sectionId = Number(this.route.snapshot.paramMap.get('sectionId'));
    if (!this.sectionId) return;

    this.sectionService.getSectionById(this.sectionId).subscribe({
      next: res => {
        this.section = res.Data;
        this.determineBaseLaw();
        this.loadRelatedSituations();
      },
      error: err => console.error('Section load failed', err)
    });
  }


  private loadBookmarkStatus(): void {
  this.sectionService
    .getBookmarkStatus(this.sectionId)
    .subscribe({
      next: (res: any) => {
        this.isBookmarked = res.Data?.isBookmarked ?? false;
      }
    });
}


  private determineBaseLaw(): void {
    const act = this.section.actShortName;

    if (act === 'IPC' || act === 'BNS') {
      this.baseLaw = 'IPC';
      this.currentLaw = 'IPC';
    }

    if (act === 'CrPC' || act === 'BNSS') {
      this.baseLaw = 'CRPC';
      this.currentLaw = 'CRPC';
    }
  }

  setTab(tab: SectionTab): void {
    this.activeTab = tab;

    if (tab === 'judgments' && this.judgments.length === 0) {
    this.loadJudgments();
  }

  if (tab === 'appeal' && this.appealRights.length === 0) {
    this.loadAppealRights();
  }
  }


  private loadJudgments(): void {
  this.judgmentsLoading = true;

  this.sectionService
    .getJudgmentsBySection(this.sectionId)
    .subscribe({
      next: (res:any) => this.judgments = res.Data,
      error: () => this.judgments = [],
      complete: () => this.judgmentsLoading = false
    });
}

private loadAppealRights(): void {
  this.appealLoading = true;

  this.sectionService
    .getAppealRightsBySection(this.sectionId)
    .subscribe({
      next: (res:any) => this.appealRights = res.Data,
      error: () => this.appealRights = [],
      complete: () => this.appealLoading = false
    });
}


  switchLaw(target: LawMode): void {
  if (this.currentLaw === target) return;

  // Base law → no API call
  if (target === this.baseLaw) {
    this.currentLaw = target;
    return;
  }

  // ❗ Only allow BNS / BNSS to reach API
  if (!this.isParallelLaw(target)) return;

  this.parallelLoading = true;

  this.sectionService
    .getParallelSection(this.sectionId, target) // ✅ target is now 'BNS' | 'BNSS'
    .subscribe({
      next: res => {
        this.parallelMapping = res;
        this.currentLaw = target;
      },
      error: () => {
        this.parallelMapping = {
          mappingType: 'Omitted',
          notes: 'No equivalent section found in new law.'
        };
        this.currentLaw = target;
      },
      complete: () => (this.parallelLoading = false)
    });
}


  private loadRelatedSituations(): void {
    this.situationService.getSituationsBySection(this.sectionId).subscribe({
      next: res => this.relatedSituations = res.Data,
      error: err => console.error('Related situations load failed', err)
    });
  }

  startQuiz(): void {
    this.router.navigate(['/quiz/start/section', this.sectionId]);
  }

  private isParallelLaw(law: LawMode): law is 'BNS' | 'BNSS' {
  return law === 'BNS' || law === 'BNSS';
}


toggleBookmark(): void {
  if (this.bookmarkLoading) return;

  this.bookmarkLoading = true;

  this.sectionService
    .toggleBookmark(this.sectionId)
    .subscribe({
      next: (res: any) => {
        this.isBookmarked = res.Data?.isBookmarked;
      },
      complete: () => (this.bookmarkLoading = false)
    });
}


}
