import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-form, [appForm]',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

}
