import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`<h3>Counter: {{ counter }}</h3>
  <button (click)="decreaseBy(-1)">-</button>
  <button (click)="resetCounter(10)">reset</button>
  <button (click)="increaseBy(+1)">+</button>
  `,
})

export class CounterComponent  {
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
