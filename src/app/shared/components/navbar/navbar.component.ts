import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  menuOpen = false;
  dropdownOpen = false;
  user: any = null;

  translations: Record<string, string> = {};
  private readonly NAV_FIELDS = [
    'UI_NAV_SITUATIONS',
    'UI_NAV_ACTS',
    'UI_NAV_QUIZ',
    'UI_NAV_ABOUT',
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loadTranslations();

    this.authService.user$.subscribe(user => {
     if (user) {
    this.user = {
      userName: user
    };
  } else {
    this.user = null;
  }
    });

    this.languageService.currentLanguage$.subscribe(() =>
      this.loadTranslations()
    );
  }

  // 🔥 CLOSE DROPDOWNS ON ANY OUTSIDE CLICK
  @HostListener('document:click')
  closeOnOutsideClick(): void {
    this.dropdownOpen = false;
    this.menuOpen = false;
  }

  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation(); // ⛔ prevent document click
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMobileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.dropdownOpen = false;
    this.router.navigate(['/']);
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }

  private loadTranslations(): void {
    const lang = this.languageService.current;

    this.translationService
      .getBulkTranslations('UI', 0, this.NAV_FIELDS, lang)
      .subscribe((res: any) => {
        this.translations = {};
        res.Data.forEach((t: any) => {
          this.translations[t.fieldName] = t.translatedText;
        });
      });
  }
}
