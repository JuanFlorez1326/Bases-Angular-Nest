import { Component } from '@angular/core';

@Component({
    selector: 'app-accountant',
    template: `
        <h1>First Project for Course Fernando</h1>
        <h2>{{ title }}</h2>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="accumulate( +base )"> +{{ base }} </button>
        <span> {{ num }} </span>
        <button (click)="accumulate( -base )"> -{{ base }} </button>
    `
})

export class AccountantComponent {
    public title: string = 'Contador App';
    public num: number = 0;
  
    public base: number = 5;
  
    public accumulate(value: number) {
      this.num += value;
    }
}