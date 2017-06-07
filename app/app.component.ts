import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>M &amp; K Brewshop!</h1>
    <h3>Beers on Tap</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (editButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Keg1', 'Brand1', 5, 6, 'Yummy', 'IPA'),
    new Keg('Keg2', 'Brand2', 6, 7, 'Good', 'Sour'),
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
