import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isValueDisplayed: boolean = false;
  public readonly value = 'Hello';

  constructor() {}

  public toggleValueVisibility() {
    this.isValueDisplayed = !this.isValueDisplayed;
  }
}
