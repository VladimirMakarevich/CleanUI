import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {

  @Output()
  public handleEvent = new EventEmitter<Event>();

  protected handleChanges(event: Event): void {
    this.handleEvent.emit(event);
  }

}
