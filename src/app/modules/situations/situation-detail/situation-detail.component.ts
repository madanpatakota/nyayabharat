import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SituationService } from 'src/app/core/services/situation.service';

@Component({
  selector: 'app-situation-detail',
  templateUrl: './situation-detail.component.html',
  styleUrls: ['./situation-detail.component.scss']
})
export class SituationDetailComponent implements OnInit {

  activeTab: 'explanation' | 'laws' | 'guidance' = 'explanation';

  situationId!: number;
  situation: any;   // contains explanation, laws, guidance

  constructor(
    private route: ActivatedRoute,
    private situationService: SituationService
  ) {}

  ngOnInit(): void {
    this.situationId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.situationId) return;

    this.loadSituationLaw();
  }

  /* ================================
     LOAD SITUATION (ALL DATA)
     ================================ */
  private loadSituationLaw(): void {
    this.situationService.getSituationLaw(this.situationId).subscribe({
      next: (res: any) => {
        this.situation = res.Data;
      },
      error: err => console.error('Situation load failed', err)
    });
  }

  setTab(tab: 'explanation' | 'laws' | 'guidance') {
    this.activeTab = tab;
  }
}
