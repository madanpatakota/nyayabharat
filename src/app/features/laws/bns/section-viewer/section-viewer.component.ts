import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnsDataService } from '../services/bns-data.service';

type TabKey = 'overview'|'punishment'|'examples'|'history'|'judgments'|'related'|'crosswalk';

@Component({
  selector: 'app-bns-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.scss']
})
export class SectionViewerComponent implements OnInit {
  id!: number;
  tab: TabKey = 'overview';

  // overview
  loading = true;
  title = ''; number = ''; body = '';

  // tab data + loading flags
  isLoading: Record<TabKey, boolean> = {
    overview: false, punishment: false, examples: false,
    history: false, judgments: false, related: false, crosswalk: false
  };
  hasLoaded: Record<TabKey, boolean> = {
    overview: true, punishment: false, examples: false,
    history: false, judgments: false, related: false, crosswalk: false
  };

  punishment?: { minimum?:string; maximum?:string; fine?:string; notes?:string[] };
  examples: Array<{title:string;facts:string;outcome:string}> = [];
  history: Array<{year:number;change:string}> = [];
  judgments: Array<{caseName:string;court:string;year:number;citation:string;summary?:string}> = [];
  related: Array<{id:number;number:string;title:string}> = [];
  crosswalk?: {legacy:{code:string;number:string;title:string};notes:string[]};

  constructor(private route: ActivatedRoute, private router: Router, private data: BnsDataService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadOverview();
    // prefetch punishment for instant feel
    this.data.getPunishment(this.id).subscribe(p => this.punishment = p);
  }

  private loadOverview(){
    this.loading = true;
    this.data.getOverview(this.id, 'en').subscribe(res => {
      this.title = res.title; this.number = res.number; this.body = res.body; this.loading = false;
    });
  }

  setTab(t: TabKey){
    this.tab = t;
    if (!this.hasLoaded[t]) this.loadTab(t);
    // optional: update hash for deep-linking
    this.router.navigate([], { fragment: t, replaceUrl: true });
  }

  private loadTab(t: TabKey){
    this.isLoading[t] = true;
    switch(t){
      case 'punishment':
        if (!this.punishment) this.data.getPunishment(this.id).subscribe(p => { this.punishment = p; this.finish(t); });
        else this.finish(t);
        break;
      case 'examples':
        this.data.getExamples(this.id).subscribe(r => { this.examples = r; this.finish(t); });
        break;
      case 'history':
        this.data.getHistory(this.id).subscribe(r => { this.history = r; this.finish(t); });
        break;
      case 'judgments':
        this.data.getJudgments(this.id).subscribe(r => { this.judgments = r; this.finish(t); });
        break;
      case 'related':
        this.data.getRelated(this.id).subscribe(r => { this.related = r; this.finish(t); });
        break;
      case 'crosswalk':
        this.data.getCrosswalk(this.id).subscribe(r => { this.crosswalk = r; this.finish(t); });
        break;
      default: break;
    }
  }

  private finish(t: TabKey){ this.isLoading[t] = false; this.hasLoaded[t] = true; }

  print(){ window.print(); }
  speak(){
    const utter = new SpeechSynthesisUtterance(`${this.number}. ${this.title}. ${this.body}`);
    utter.rate = 1; utter.pitch = 1; utter.lang = 'en-IN';
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(utter);
  }

  // Make a safe slug for router links
slugify(title?: string): string {
  return (title ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')   // keep only a–z 0–9
    .replace(/(^-|-$)/g, '');      // trim leading/trailing -
}

// Build a routerLink array safely
buildSectionLink(r?: { id?: number; title?: string; slug?: string }): any[] {
  if (!r?.id) return ['/bns/sections'];
  const slug = r.slug ?? this.slugify(r.title);
  return ['/bns/section', r.id, slug];
}

}
