import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="jumbotron">
      <h1>M &amp; K Brewshop!</h1>
    </div>
    <div class="container">
      <h1>Beers on Tap</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <edit-keg [childSelectedKeg]="selectedKeg" (editButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Alderaanian Ale', 'Alderan Reasons', 5, 6, 'Yummy', 'Ale'),
    new Keg('Duff Lite', 'Duff', 6, 7, 'Basic', 'Lager'),
    new Keg('Ent-draught', 'Green Dragon', 3, 10, 'Great! Taste the magic.', 'Pilsner'),
    new Keg('Girlie Girl Beer ', 'Married with Children', 8, 4.7, 'It is whatever', 'IPA'),
    new Keg('Harry Porter', 'Gringots', 4, 4, 'thumbs up. dont drink and fly.', 'Porter'),
    new Keg('Mudders Milk', 'Mals', 5, 5, 'great to WASH down some wings', 'Stout'),
    new Keg('Romulan Ale', 'Valdores,', 7, 5.5, 'overruns your tastebuds', 'Ale'),
    new Keg('Zazz Beer', 'Pickles', 10, 10, 'brutal. totally metal.', 'Saison'),
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
