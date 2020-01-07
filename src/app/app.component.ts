import {Component} from '@angular/core';
import {locale} from 'devextreme/localization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title = 'dx-localization-demo';
  readonly applyButton = {
    text: 'Apply',
    onClick: () => this.applyLocale(),
  };

  date = Date.now();
  readonly format = {day: '2-digit', year: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric'};

  currentLocale = 'en';
  isLocaleApplying = false;

  constructor() {
    locale(this.currentLocale);
  }

  applyLocale(): void {
    this.isLocaleApplying = true;

    setTimeout(() => {
      locale(this.currentLocale);
      this.isLocaleApplying = false;
    }, 250);
  }
}
