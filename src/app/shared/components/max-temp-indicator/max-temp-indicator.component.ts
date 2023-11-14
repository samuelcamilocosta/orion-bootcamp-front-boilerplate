import { Component, Input } from '@angular/core';
import { ITempIndicator } from 'src/app/interfaces/itemp-indicator';

@Component({
  selector: 'app-max-temp-indicator',
  templateUrl: './max-temp-indicator.component.html',
  styleUrls: ['./max-temp-indicator.component.scss'],
})
export class MaxTempIndicatorComponent {
  /**
   * maxIndicator
   *
   *
   */
  @Input() maxIndicator?: ITempIndicator;
}
