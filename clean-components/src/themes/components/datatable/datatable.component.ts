import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TableColumn } from '@swimlane/ngx-datatable/release/types';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {

  /**
   * The minimum header height in pixels.
   * Pass a falsey for no header
   */
  @Input()
  public headerHeight: any = 30;

  /**
   * The row height; which is necessary
   * to calculate the height for the lazy rendering.
   */
  @Input()
  public rowHeight: number = 30;

  /**
   * Show the linear loading bar.
   * Default value: `false`
   */
  @Input()
  public loadingIndicator: boolean = false;

  /**
   * Rows that are displayed in the table.
   */
  /**
   * Gets the rows.
   */
  @Input()
  public rows: any[];

  /**
   * Columns to be displayed.
   */
  /**
   * Get the columns.
   */
  @Input()
  public columns: TableColumn[];

  /**
   * Show the linear loading bar.
   * Default value: `false`
   */
  @Input()
  public isLoading: boolean = false;

  /**
   * Enable vertical scrollbars
   */
  @Input()
  public scrollbarVirtual: boolean = true;

  /**
   * Type of column width distribution formula.
   * Example: flex, force, standard
   */
  @Input()
  public columnMode: ColumnMode = ColumnMode.force;

  /**
   * Body was scrolled typically in a `scrollbarV:true` scenario.
   */
  @Output()
  public scrollEvent = new EventEmitter();

  public scroll = (event: any): void => {
    if (event.target && event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 20) {
      this.scrollEvent.emit();
    }
  };

}
