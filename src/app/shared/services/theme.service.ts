import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setDark(): void {
    document.documentElement.removeAttribute('data-theme');
  }

  setLight(): void {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
