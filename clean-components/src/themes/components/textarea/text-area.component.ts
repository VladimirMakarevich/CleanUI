import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: '<ng-content></ng-content>',
  styleUrls: ['./text-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextAreaComponent {

}
