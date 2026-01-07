import { Component, OnInit } from '@angular/core';
import { Act } from 'src/app/core/models/act.model';
import { ActService } from 'src/app/core/services/act.service';

@Component({
  selector: 'app-act-list',
  templateUrl: './act-list.component.html',
  styleUrls: ['./act-list.component.scss']
})
export class ActListComponent implements OnInit {

  loading = false;

  acts: Act[] = [];
  filteredActs: Act[] = [];
  pinnedActs: Act[] = [];

  searchText = '';
  selectedType: 'All' | Act['actType'] = 'All';

  constructor(private actService: ActService) {}

  ngOnInit(): void {
    this.loading = true;

    this.actService.getAllActs().subscribe({
      next: (res: any) => {
        this.acts = res.Data.map((a: any) => ({
          ...a,
          pinned: ['IPC', 'CrPC', 'Constitution'].includes(a.actShortName),
          displayBadge: this.getBadge(a),
          subType: this.getSubType(a)
        }));

        this.preparePinnedActs();
        this.applyFilters();
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onSearch(value: string): void {
    this.searchText = value.toLowerCase().trim();
    this.applyFilters();
  }

  selectType(type: 'All' | Act['actType']): void {
    this.selectedType = type;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredActs = this.acts.filter(act => {
      const matchesSearch =
        !this.searchText ||
        act.actName.toLowerCase().includes(this.searchText) ||
        act.actShortName.toLowerCase().includes(this.searchText);

      const matchesType =
        this.selectedType === 'All' ||
        act.actType === this.selectedType;

      return matchesSearch && matchesType && !act.pinned;
    });
  }

  private preparePinnedActs(): void {
    this.pinnedActs = this.acts.filter(a => a.pinned);
  }

  private getBadge(act: Act): string {
    if (act.actType === 'Constitutional') return 'Supreme Law';
    if (act.actType === 'Core') return 'Core Law';
    if (act.actType === 'Special') return 'Special Act';
    if (act.actType === 'Repealed') return 'Repealed';
    return 'Active';
  }

  private getSubType(act: Act): string {
    if (act.actShortName === 'CrPC') return 'Procedural • Criminal';
    if (act.actShortName === 'CPC') return 'Procedural • Civil';
    return '';
  }

  trackById(_: number, act: Act): number {
    return act.actId;
  }
}
