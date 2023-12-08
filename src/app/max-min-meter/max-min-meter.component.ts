import { Component, EventEmitter, Input ,Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.css'
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';
  
  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChange(value : number){
    console.log('test minChange event:',value);
  }
  doMaxChange(value : number){
    console.log('test maxChange event:',value);
  }
}
