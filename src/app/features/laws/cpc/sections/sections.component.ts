import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CpcDataService, LawSectionIndex } from '../services/cpc-data.service';

@Component({
  selector: 'app-cpc-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class CpcSectionsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  loading = true;
  all: LawSectionIndex[] = [];
  view: LawSectionIndex[] = [];

  q = '';
  chips = ['Jurisdiction', 'Procedure', 'Decree', 'Order', 'Appeal'];
  searchInput?: HTMLInputElement;

  constructor(private data: CpcDataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.data.getIndex('en')
      .pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.all = list;
        this.view = list; // show immediately
        const qp = this.route.snapshot.queryParamMap;
        this.q = qp.get('q') ?? '';
        if (this.q) this.applyFilters();
        this.loading = false;
      });
  }

  onSearch(event: Event){
    const input = event.target as HTMLInputElement;
    this.q = input.value || '';
    this.applyFilters();
    this.router.navigate([], { queryParams: this.q ? { q: this.q } : {}, replaceUrl: true });
  }

  onChipClick(label: string){
    const tag = label.toLowerCase();
    if (!this.q.toLowerCase().includes(tag)) this.q = (this.q ? this.q + ' ' : '') + tag;
    this.applyFilters();
    this.router.navigate([], { queryParams: this.q ? { q: this.q } : {}, replaceUrl: true });
  }

  applyFilters(){
    const s = this.q.trim().toLowerCase();
    this.view = !s ? this.all : this.all.filter(x =>
      x.title.toLowerCase().includes(s) ||
      x.number.toLowerCase().includes(s) ||
      x.tags.some(t => t.toLowerCase().includes(s))
    );
  }

  @HostListener('document:keydown', ['$event'])
  onDocKey(e: KeyboardEvent){
    if (e.key === '/' && this.searchInput) { e.preventDefault(); this.searchInput.focus(); this.searchInput.select(); }
  }
  bindSearchRef(el: HTMLInputElement){ this.searchInput = el; }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }
}
