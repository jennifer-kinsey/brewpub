import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>M &amp; K Brewshop!</h1>
    <h3>Beers on Tap</h3>
    <ul>
       <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}</li>
     </ul>

  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Keg1', 'Brand1', 5, 6, 'Yummy', 'IPA'),
    new Keg('Keg2', 'Brand2', 6, 7, 'Good', 'Sour'),
  ]
}

export class Keg {
  public pintsRemaining: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public description: string, public type: string) { }
}
