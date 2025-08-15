import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, debounceTime } from 'rxjs';
import { BnsDataService } from '../services/bns-data.service';
import { LawSectionIndex } from '../../../../app/models/law-section.model';

type ToggleKey = 'cognizable' | 'bailable' | 'compoundable';

@Component({
  selector: 'app-bns-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private search$ = new Subject<string>();

  loading = true;
  all: LawSectionIndex[] = [];
  view: LawSectionIndex[] = [];

  // UI state
  q = '';
  toggles: Record<ToggleKey, boolean> = {
    cognizable: false, bailable: false, compoundable: false
  };
  chips = ['Property', 'Person', 'State', 'Cognizable', 'Bailable', 'Compoundable'];

  // Search focus helper
  searchInput?: HTMLInputElement;

  constructor(
    private data: BnsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load data
    this.data.getIndex('en')
  .pipe(takeUntil(this.destroy$))
  .subscribe(list => {
    this.all = list;
    this.view = list;          // ✅ show immediately
    this.initFromQuery();      // then apply URL filters if any
    this.loading = false;
  });

    // Debounced search stream
    this.search$.pipe(debounceTime(120), takeUntil(this.destroy$))
      .subscribe(q => { this.q = q; this.applyFilters(); this.pushQuery(); });
  }

  private initFromQuery(){
    const qp = this.route.snapshot.queryParamMap;
    this.q = qp.get('q') ?? '';
    this.toggles.cognizable   = qp.get('cognizable') === '1';
    this.toggles.bailable     = qp.get('bailable') === '1';
    this.toggles.compoundable = qp.get('compoundable') === '1';
    this.applyFilters();
  }

  private pushQuery(){
    const params: any = {};
    if (this.q) params.q = this.q;
    if (this.toggles.cognizable) params.cognizable = '1';
    if (this.toggles.bailable) params.bailable = '1';
    if (this.toggles.compoundable) params.compoundable = '1';
    this.router.navigate([], { queryParams: params, replaceUrl: true });
  }

  // Called from template (input event)
 // comment out the Subject/debounce code for now

onSearch(event: Event){
  const input = event.target as HTMLInputElement;
  this.q = input.value || '';
  this.applyFilters();   // ✅ update results immediately
  this.pushQuery();
}


//  type ToggleKey = 'cognizable' | 'bailable' | 'compoundable';

/* type guard: narrows string → ToggleKey */
isToggleKey(s: string): s is ToggleKey {
  return s === 'cognizable' || s === 'bailable' || s === 'compoundable';
}

  /* used by template to read active state safely */
isChipActive(label: string): boolean {
  const k = label.toLowerCase();
  return this.isToggleKey(k) ? this.toggles[k] : false;
}

/* update your existing onChipClick to use the guard */
onChipClick(label: string){
  const k = label.toLowerCase();
  console.log('chip click', k);  // ✅ temporary
  if (this.isToggleKey(k)) {
    this.toggles[k] = !this.toggles[k];
    this.applyFilters();
    this.pushQuery();
    return;
  }
  const tag = k;
  if (!this.q.toLowerCase().includes(tag)) {
    this.q = (this.q ? this.q + ' ' : '') + tag;
    this.applyFilters();
    this.pushQuery();
  }
}


  applyFilters(){
    // base: search
    let list = this.data.searchIndex(this.q, this.all);

    // toggles
    if (this.toggles.cognizable)   list = list.filter(x => x.badges.cognizable);
    if (this.toggles.bailable)     list = list.filter(x => x.badges.bailable);
    if (this.toggles.compoundable) list = list.filter(x => x.badges.compoundable);

    this.view = list;
  }

  open(sec: LawSectionIndex){
    this.router.navigate(['/bns/section', sec.id, sec.slug]);
  }

  // Focus search with "/"
  @HostListener('document:keydown', ['$event'])
  onDocKey(e: KeyboardEvent){
    if (e.key === '/' && this.searchInput) {
      e.preventDefault();
      this.searchInput.focus();
      this.searchInput.select();
    }
  }

  // Bind search input ref
  bindSearchRef(el: HTMLInputElement){ this.searchInput = el; }


  resetFilters(): void {
  this.toggles = { cognizable: false, bailable: false, compoundable: false };
  this.q = '';
  this.applyFilters();
  this.pushQuery();
}





  ngOnDestroy(): void {
    this.destroy$.next(); this.destroy$.complete();
  }
}
