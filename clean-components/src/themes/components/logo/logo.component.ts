import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  @Input() public width: string;

  public border = false;

  @Input()
  public set isBordered(value: boolean) {
    this.border = value;
  }

}
