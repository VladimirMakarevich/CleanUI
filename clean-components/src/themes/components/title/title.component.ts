import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

}
