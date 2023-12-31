import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Angular';

  public counter: number = 10

  increaseBy( value : number) {
    this.counter += value;
  }
  decreaseBy( value : number) {
    this.counter += value;
  }
  resetCounter(value : number){
    this.counter = value;
  }
}
