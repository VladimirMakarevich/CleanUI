import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {ControlDirective} from '../../directives/control.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {provide: ControlDirective, useExisting: forwardRef(() => CheckboxComponent)}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent extends ControlDirective {

}
