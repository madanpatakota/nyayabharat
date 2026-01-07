import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageCode } from '../config/languages.config';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private lang$ = new BehaviorSubject<LanguageCode>('en');

  currentLanguage$ = this.lang$.asObservable();

  get current(): LanguageCode {
    return this.lang$.value;
  }

  setLanguage(lang: LanguageCode) {
    this.lang$.next(lang);
    localStorage.setItem('lang', lang);
  }

  loadSavedLanguage() {
    const saved = localStorage.getItem('lang') as LanguageCode;
    if (saved) this.lang$.next(saved);
  }
}
