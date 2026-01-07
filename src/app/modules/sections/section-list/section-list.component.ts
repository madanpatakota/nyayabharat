import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/core/services/section.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent implements OnInit {
  sections: any[] = [];
  filteredSections: any[] = [];

  chapterId?: number;
  actId?: number;

  loading = true;

  breadcrumbs: { label: string; link?: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
  this.route.queryParams.subscribe((params) => {
    this.chapterId = params['chapterId']
      ? Number(params['chapterId'])
      : undefined;

    this.actId = params['actId']
      ? Number(params['actId'])
      : undefined;

    this.loading = true;

    // 🔹 Build breadcrumbs AFTER params are available
    this.breadcrumbs = [{ label: 'Acts', link: '/acts' }];

    if (this.actId) {
      this.breadcrumbs.push({
        label: 'Chapters',
        link: '/chapters?actId=' + this.actId,
      });
    }

    this.breadcrumbs.push({ label: 'Sections' });

    if (this.chapterId) {
      this.loadSectionsByChapter(this.chapterId);
    } else if (this.actId) {
      this.loadSectionsByAct(this.actId);
    } else {
      this.loading = false;
    }
  });
}


openSection(sectionId: number): void {
  // routerLink already works for click, this is for keyboard
}


  loadSectionsByAct(actId: number): void {
    this.sectionService.getSectionsByAct(actId).subscribe({
      next: (res) => {
        this.sections = res.Data ?? res;
        this.filteredSections = this.sections;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  loadSectionsByChapter(chapterId: number): void {
    // ✅ REAL API (replace dummy)
    this.sectionService.getSectionsByChapter(chapterId).subscribe({
      next: (res:any) => {
        this.sections = res.Data ?? res;
        this.filteredSections = this.sections;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  onSearch(value: string): void {
    const text = value.toLowerCase().trim();

    this.filteredSections = this.sections.filter(
      (s) =>
        s.sectionNumber?.toLowerCase().includes(text) ||
        s.sectionTitle?.toLowerCase().includes(text)
    );
  }

  trackBySection(_: number, section: any): number {
    return section.sectionId;
  }
}
