import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnsDataService } from '../services/bns-data.service';

@Component({
  selector: 'app-bns-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.scss']
})
export class SectionViewerComponent implements OnInit {
  id!: number;
  loading = true;
  title = '';
  number = '';
  body = '';
  tab: 'overview'|'punishment'|'examples'|'history'|'judgments'|'related'|'crosswalk' = 'overview';

  constructor(private route: ActivatedRoute, private data: BnsDataService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.load();
  }

  setTab(t: typeof this.tab){ this.tab = t; }

  private load() {
    this.loading = true;
    this.data.getOverview(this.id, 'en').subscribe(res => {
      this.title = res.title; this.number = res.number; this.body = res.body; this.loading = false;
    });
  }
}
