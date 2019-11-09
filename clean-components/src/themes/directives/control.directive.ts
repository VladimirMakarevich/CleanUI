import {trim} from 'lodash';
import {Directive, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {fromEvent, Subscription} from 'rxjs';
import {ValidationErrorService} from '../../core/services/validations/validation-error.service';

@Directive({
  selector: '[appControl]'
})
export class ControlDirective implements OnInit, OnDestroy {

  @Input()
  public placeholder: string;

  @Input()
  public control: AbstractControl = new FormControl();

  @Input()
  public focusOnInit: boolean;

  @Input()
  public name = '';

  @ViewChild('input', { static: true})
  public inputElement: HTMLInputElement;

  public get error(): string {
    return this.validationErrorService.getValidationErrorMessage(this.control);
  }

  protected blurEventSubscription: Subscription;

  constructor(
    protected validationErrorService: ValidationErrorService
  ) {
  }

  public ngOnInit(): void {
    if (this.focusOnInit) {
    }
  }

  public ngOnDestroy(): void {
    if (this.blurEventSubscription) {
      this.blurEventSubscription.unsubscribe();
      this.blurEventSubscription = null;
    }
  }

  protected handleBlur(): void {
    if (this.inputElement) {
      this.blurEventSubscription = fromEvent(this.inputElement, 'blur')
        .subscribe(this.trimControlValue);
    }
  }

  protected trimControlValue = (event: Event): void => {
    this.control.patchValue(trim(this.control.value), { onlySelf: true, emitEvent: false });
  }

}
