import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {

  counter:number = 0;
  @Input() step:number = 1;
  @Output() numberChange = new EventEmitter();


  decrease() {
    if(this.counter - this.step >= 0){
      console.log("decrease--");
      this.counter = this.counter - this.step ;
      this.numberChange.emit(this.counter);
    }
  }
  

  increase(){
    if(this.counter + this.step <= 100){
      console.log("increase++");
      this.counter = this.counter + this.step ;
      this.numberChange.emit(this.counter);
    }
  }
}
