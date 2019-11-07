import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  public isValid: boolean = true;

  @Output()
  public readonly submit = new EventEmitter<Event>();

  public handleClick(event: Event): void {
    this.submit.emit(event);
  }

}
