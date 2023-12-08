import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-ng-project';

  testNumberChange(value : number){
    console.log('test NumberChange from app action bar', value);
  }
  testClick(){
    console.log("test Event Binding")
  }
}
