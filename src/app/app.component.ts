import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppActions, AppTheme, selectAppTheme, selectIsDarkTheme } from '@store/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentTheme$: Observable<AppTheme> = this.store.select(selectAppTheme);
  isDarkTheme$: Observable<boolean> = this.store.select(selectIsDarkTheme);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      AppActions.initTheme()
    );
  }

  toggleTheme() {
    this.store.dispatch(
      AppActions.toggleTheme()
    );
  }


}
