import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CpcDataService } from '../services/cpc-data.service';

type TabKey = 'overview'|'relief'|'procedure'|'examples'|'judgments'|'related';

@Component({
  selector: 'app-cpc-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.scss']
})
export class CpcSectionViewerComponent  implements OnInit {
  id!: number;
  tab: TabKey = 'overview';

  loading = true;
  title = ''; number = ''; body = '';

  isLoading: Record<TabKey, boolean> = { overview:false, relief:false, procedure:false, examples:false, judgments:false, related:false };
  hasLoaded: Record<TabKey, boolean> = { overview:true, relief:false, procedure:false, examples:false, judgments:false, related:false };

  relief?: {summary?:string; remedies?:string[]};
  procedure?: {steps?:string[]; notes?:string[]};
  examples: Array<{title:string;facts:string;outcome?:string}> = [];
  judgments: Array<{caseName:string;court:string;year:number;citation:string;summary?:string}> = [];
  related: Array<{id:number;number:string;title:string;slug?:string}> = [];

  constructor(private route: ActivatedRoute, private router: Router, private data: CpcDataService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadOverview();
    this.data.getProcedure(this.id).subscribe(r => this.procedure = r); // small prefetch
  }

  private loadOverview(){
    this.loading = true;
    this.data.getOverview(this.id).subscribe(r => {
      this.title = r.title; this.number = r.number; this.body = r.body; this.loading = false;
    });
  }

  setTab(t: TabKey){
    this.tab = t;
    if (!this.hasLoaded[t]) this.loadTab(t);
    this.router.navigate([], { fragment: t, replaceUrl: true });
  }

  private loadTab(t: TabKey){
    this.isLoading[t] = true;
    switch(t){
      case 'relief':    this.data.getRelief(this.id).subscribe(r => { this.relief = r; this.finish(t); }); break;
      case 'procedure': this.data.getProcedure(this.id).subscribe(r => { this.procedure = r; this.finish(t); }); break;
      case 'examples':  this.data.getExamples(this.id).subscribe(r => { this.examples = r; this.finish(t); }); break;
      case 'judgments': this.data.getJudgments(this.id).subscribe(r => { this.judgments = r; this.finish(t); }); break;
      case 'related':   this.data.getRelated(this.id).subscribe(r => { this.related = r; this.finish(t); }); break;
      default: this.finish(t);
    }
  }
  private finish(t: TabKey){ this.isLoading[t] = false; this.hasLoaded[t] = true; }

  slugify(title?: string): string {
    return (title ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  buildLink(r?: {id?:number; title?:string; slug?:string}){ return r?.id ? ['/cpc/section', r.id, (r.slug ?? this.slugify(r.title))] : ['/cpc/sections']; }

  print(){ window.print(); }
}
