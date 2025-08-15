import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnsDataService } from '../services/bns-data.service';

type TabKey = 'overview'|'punishment'|'examples'|'history'|'judgments'|'related'|'crosswalk';

@Component({
  selector: 'app-bns-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.scss']
})
export class SectionViewerComponent implements OnInit {
  id!: number;
  loading = true;
  

  // Overview
  title = ''; number = ''; body = '';

  // Punishment
  punishment?: { minimum?:string; maximum?:string; fine?:string; notes?:string[] };

  tab: TabKey = 'overview';

  constructor(private route: ActivatedRoute, private data: BnsDataService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadOverview();
    // prefetch second tab to feel instant
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
    // optional: scroll tabs into view on mobile
    const el = document.getElementById('tabs');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  speak(){
    const utter = new SpeechSynthesisUtterance(`${this.number}. ${this.title}. ${this.body}`);
    utter.rate = 1; utter.pitch = 1; utter.lang = 'en-IN';
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(utter);
  }

  print() {
  window.print();
}

}
