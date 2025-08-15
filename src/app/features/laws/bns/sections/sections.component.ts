import { Component, OnDestroy, OnInit } from '@angular/core';
import { BnsDataService } from '../services/bns-data.service';
import { LawSectionIndex } from '../../../../app/models/law-section.model';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bns-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  loading = true;
  all: LawSectionIndex[] = [];
  view: LawSectionIndex[] = [];
  q = '';

  chips = ['Property', 'Person', 'State', 'Cognizable', 'Bailable', 'Compoundable'];

  constructor(private data: BnsDataService, private router: Router) {}

  ngOnInit(): void {
    this.data.getIndex('en')
      .pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.all = list;
        this.view = list;
        this.loading = false;
      });
  }
  
onSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  this.q = input.value;
  this.view = this.data.searchIndex(this.q, this.all);
}


  open(sec: LawSectionIndex) {
    this.router.navigate(['/bns/section', sec.id, sec.slug]);
  }

  ngOnDestroy(): void {
    this.destroy$.next(); this.destroy$.complete();
  }
}
