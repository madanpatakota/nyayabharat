import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/core/services/chapter.service';
import { ActService } from 'src/app/core/services/act.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {

  chapters: any[] = [];
  actId!: number;

  actName = '';
  actShortName = '';

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chapterService: ChapterService,
    private actService: ActService
  ) {}

  ngOnInit(): void {
    this.actId = Number(this.route.snapshot.queryParamMap.get('actId'));

    if (!this.actId) {
      this.router.navigate(['/acts']);
      return;
    }

    this.loadActDetails();
    this.loadChapters();
  }

  private loadActDetails(): void {
    this.actService.getActById(this.actId).subscribe({
      next: (res: any) => {
        this.actName = res.Data.actName;
        this.actShortName = res.Data.actShortName;
      }
    });
  }

  private loadChapters(): void {
    this.chapterService.getChaptersByAct(this.actId).subscribe({
      next: (res: any) => {
        this.chapters = res.Data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  openChapter(chapterId: number): void {
    this.router.navigate(['/sections'], {
      queryParams: { chapterId }
    });
  }

  trackByChapter(_: number, ch: any): number {
    return ch.chapterId;
  }
}
