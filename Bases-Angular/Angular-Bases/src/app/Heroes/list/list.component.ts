import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
    'Black Widow',
    'Black Panther',
    'Doctor Strange',
    'Antman',
    'Hawkeye'
  ];

  erasedHero: string = '' 

  removeHeroe() {
    this.erasedHero = this.heroes.shift() || '';
  }
}