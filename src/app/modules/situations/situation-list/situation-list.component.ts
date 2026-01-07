import { Component, OnInit } from '@angular/core';
import { Situation } from 'src/app/core/models/situation.model';
import { SituationService } from 'src/app/core/services/situation.service';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.component.html',
  styleUrls: ['./situation-list.component.scss']
})
export class SituationListComponent implements OnInit {

  situations: Situation[] = [];
  filteredSituations: Situation[] = [];

  searchText = '';
  selectedCategory = 'All';

  constructor(private situationService: SituationService) {}

  ngOnInit(): void {
    this.loadSituations();
  }

  /* ================================
     API LOAD
     ================================ */
  private loadSituations(): void {
    this.situationService.getAllSituations().subscribe({
      next: (res:any) => {
        this.situations = res.Data;
        this.applyFilters();
      },
      error: err => {
        console.error('Failed to load situations', err);
      }
    });
  }

  /* ================================
     SEARCH
     ================================ */
  onSearchChange(value: string): void {
    this.searchText = value.toLowerCase().trim();
    this.applyFilters();
  }

  /* ================================
     CATEGORY
     ================================ */
  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  /* ================================
     FILTER LOGIC
     ================================ */
  private applyFilters(): void {
    this.filteredSituations = this.situations.filter(s => {

      const matchesSearch =
        !this.searchText ||
        s.title.toLowerCase().includes(this.searchText) ||
        s.description.toLowerCase().includes(this.searchText);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        s.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  /* ================================
     SEVERITY LABEL
     ================================ */
  getSeverityLabel(level: number): string {
    switch (level) {
      case 1: return 'Low';
      case 2: return 'Medium';
      case 3: return 'High';
      default: return 'Unknown';
    }
  }

  trackById(index: number, item: Situation): number {
    return item.id;
  }
}
