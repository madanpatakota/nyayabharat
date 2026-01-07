import { Component, OnInit } from '@angular/core';
import { HOME_ACTIONS } from 'src/app/core/config/home-actions.config';
import { LanguageCode } from 'src/app/core/config/languages.config';
import { ActService } from 'src/app/core/services/act.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { SituationService } from 'src/app/core/services/situation.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  acts: any[] = [];
  situations: any[] = [];

  currentLang: LanguageCode = 'en';
  actions = HOME_ACTIONS;

  /** translations map: FieldName -> text */
  translations: Record<string, string> = {};

  loadingActs = true;
  loadingSituations = true;

  constructor(
    private langService: LanguageService,
    private translationService: TranslationService,
    private actService: ActService,
    private situationService: SituationService
  ) {}

  private readonly HOME_FIELDS = [
  // Hero
  'UI_HOME_HERO_TITLE',
  'UI_HOME_HERO_DESC',

  // Actions
  'UI_HOME_ACTION_PROBLEM_TITLE',
  'UI_HOME_ACTION_PROBLEM_DESC',
  'UI_HOME_ACTION_LEARN_TITLE',
  'UI_HOME_ACTION_LEARN_DESC',
  'UI_HOME_ACTION_QUIZ_TITLE',
  'UI_HOME_ACTION_QUIZ_DESC'
];


  ngOnInit(): void {
    this.langService.loadSavedLanguage();
    this.currentLang = this.langService.current;

    this.loadHomeTranslations();

    this.langService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.loadHomeTranslations(); // reload on language change
    });

    this.loadActs();
    this.loadSituations();
  }

 private loadHomeTranslations() {
  this.translationService
    .getBulkTranslations('UI', 0, this.HOME_FIELDS, this.currentLang)
    .subscribe((res:any) => {
      this.translations = {};
      res.Data.forEach((t:any) => {
        this.translations[t.fieldName] = t.translatedText;
      });
    });
}


  private loadActs() {
    this.actService.getActiveActs().subscribe({
      next: (res: any) => {
        this.acts = res.Data;
        this.loadingActs = false;
      },
      error: () => (this.loadingActs = false),
    });
  }

  private loadSituations() {
    this.situationService.getAllSituations().subscribe({
      next: (res: any) => {
        this.situations = res.Data.slice(0, 3);
        this.loadingSituations = false;
      },
      error: () => (this.loadingSituations = false),
    });
  }
}
