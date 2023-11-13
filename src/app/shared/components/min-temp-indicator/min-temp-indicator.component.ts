import { Component, Input } from '@angular/core';
import { ITempIndicator } from 'src/app/interfaces/itemp-indicator';

@Component({
  selector: 'app-min-temp-indicator',
  templateUrl: './min-temp-indicator.component.html',
  styleUrls: ['./min-temp-indicator.component.scss'],
})
export class MinTempIndicatorComponent {
  @Input() minIndicator?: ITempIndicator;
}
