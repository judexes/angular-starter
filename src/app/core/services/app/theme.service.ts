import { AppTheme, selectAppTheme } from '@store/app';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {}

  public saveTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  //Called on init to set the initial theme
  public getTheme(): Observable<AppTheme> {
    //get OS theme
    let osTheme: AppTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    //get saved theme
    let savedTheme = localStorage.getItem('theme') as AppTheme | null;

    //return saved theme if it exists and is valid
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      return of(savedTheme);
    }
    //return OS theme if saved theme is not valid
    return of(osTheme);
  }

  //Called after init to set and watch for changes in theme
  public setUiTheme(currentTheme: AppTheme) {
    this.document.documentElement.classList.remove('light', 'dark');
    this.document.documentElement.classList.add(currentTheme);
    this.saveTheme(currentTheme);
  }
}
