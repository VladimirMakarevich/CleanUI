import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldGroupComponent {

  @Input()
  public title: string;
}
