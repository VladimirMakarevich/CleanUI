import { Component, OnInit } from '@angular/core';
import { SelectComponentBase } from '../select.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent extends SelectComponentBase implements OnInit {

  public constructor() {
    super();
  }

  public ngOnInit() {
  }

}
