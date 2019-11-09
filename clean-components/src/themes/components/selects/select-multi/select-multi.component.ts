import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-multi',
  templateUrl: './select-multi.component.html',
  providers: [{ provide: SelectComponent, useExisting: SelectMultiComponent }]

})
export class SelectMultiComponent extends SelectComponent implements OnInit {

  public constructor() {
    super();
  }

  public ngOnInit() {
  }

}
