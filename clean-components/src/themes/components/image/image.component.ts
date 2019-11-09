import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  @Input()
  public fileInfoId: number;

  @Input()
  public imageSrc: string;

  @Input()
  public maxWidth: number = 400;

  @Input()
  public width: number = 200;

}
