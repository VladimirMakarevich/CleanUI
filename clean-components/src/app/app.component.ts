import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'clean-components';
  public buttonResultText: string;

  public handleButtonExample(event: Event): void {
    this.buttonResultText = `was ${event.type}ed`;
  }
}
