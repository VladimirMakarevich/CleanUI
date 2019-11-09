import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LookupModel } from '../../../core/models/lookups/lookup.model';
import { AbstractControl } from '@angular/forms';

export class SelectComponentBase implements OnInit {

  @Output()
  public search = new EventEmitter();

  @Input()
  public options: LookupModel[] = [];

  @Input()
  public searchControl: AbstractControl;

  @Input()
  public selectControl: AbstractControl;

  @Input()
  public inputName = '';

  public error: string = '';

  private internalSearch;

  public ngOnInit() {
    this.internalSearch = this.search.observers.length === 0;
  }
}
