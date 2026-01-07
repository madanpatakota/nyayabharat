import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/core/services/chapter.service';

@Component({
  selector: 'app-act-detail',
  template: '', // 👈 NO UI HERE
})
export class ActDetailComponent implements OnInit {

  private actId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chapterService: ChapterService
  ) {}

  ngOnInit(): void {
    this.actId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.actId) {
      this.router.navigate(['/acts']);
      return;
    }

    // 🔑 SINGLE RESPONSIBILITY: decide navigation
    this.chapterService.getChaptersByAct(this.actId).subscribe({
      next: (chapters:any) => {
        if (chapters && chapters.Data.length > 0) {
          // ✅ Act has chapters
          this.router.navigate(['/chapters'], {
            queryParams: { actId: this.actId }
          });
        } else {
          // ❌ Act has NO chapters → go directly to sections
          this.router.navigate(['/sections'], {
            queryParams: { actId: this.actId }
          });
        }
      },
      error: () => {
        // fallback safety
        this.router.navigate(['/sections'], {
          queryParams: { actId: this.actId }
        });
      }
    });
  }
}
