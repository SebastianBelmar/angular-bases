import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName() : string {
    return this.name ? `${this.name[0].toUpperCase()}${this.name.slice(1)}` : ``;
  }

  getHeroDescription() : string {
    return `I am ${this.capitalizedName} and I'm ${this.age}`;
  }

  changeHero() : void {
    this.name = 'spiderman';
  }

  changeAge() : void {
    this.age = 20;
  }

  resetForm() : void {
    this.name = 'ironman';
    this.age   = 45;

    // document.querySelectorAll('h1')!.forEach( elemento => elemento.innerHTML = '<h1>Desde Angular</h1>')
  }
}
