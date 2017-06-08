import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="container">
    <h4 class="low-on-beer">Get it before it's gone!</h4>
    <ul>
      <li *ngFor="let currentKeg of childKegList | pintness">
        {{currentKeg.name}} - {{currentKeg.pintsRemaining}} pints left!
      </li>
    </ul>
    <label>What kind of beer do you want? See what we have...</label>
    <select (change)="onChange($event.target.value)">
      <option value="Ale">Ale</option>
      <option value="IPA">IPA</option>
      <option value="Stout">Stout</option>
      <option value="Lager">Lager</option>
      <option value="Porter">Porter</option>
      <option value="Pilsner">Pilsner</option>
      <option value="Saison">Saison</option>
      <option value="Bock">Bock</option>
      <option value="Other">Other</option>
    </select>
    <div id="type-beer">No Beers Match!</div>
    <ul>
      <li *ngFor="let currentKeg of childKegList | type:filterByType"> {{currentKeg.name}}
        <input *ngIf="currentKeg.type === IPA" selected="selected" type="checkbox"/>
        <input *ngIf="currentKeg.type === Ale" type="checkbox"/>
        <input *ngIf="currentKeg.type === Stout" type="checkbox"/>
        <input *ngIf="currentKeg.type === Lager" type="checkbox"/>
        <input *ngIf="currentKeg.type === Porter" type="checkbox"/>
        <input *ngIf="currentKeg.type === Pilsner" type="checkbox"/>
        <input *ngIf="currentKeg.type === Saison" type="checkbox"/>
        <input *ngIf="currentKeg.type === Bock" type="checkbox"/>
        <input *ngIf="currentKeg.type === Other" type="checkbox"/>
      </li>
    </ul>
    <br><hr><br>

    <div class="row">
      <div class="col-xs-3 bold">
        Beer
      </div>
      <div class="col-xs-1 bold">
        Variety
      </div>
      <div class="col-xs-1 bold">
        Price
      </div>
      <div class="col-xs-1 bold">
        ABV
      </div>
      <div class="col-xs-2 bold">
        Description
      </div>
      <div class="col-xs-2 bold">
        Pints Left
      </div>
      <div class="col-xs-2 bold">
        Action
      </div>
    </div>
    <div class="row"  *ngFor="let currentKeg of childKegList">
      <div class="col-xs-3">
        {{currentKeg.brand}} {{currentKeg.name}}
      </div>
      <div class="col-xs-1">
        {{currentKeg.type}}
      </div>
      <div class="col-xs-1" [style.background-color]="colorizeBeer(currentKeg)">
          &#36;{{currentKeg.price}}
      </div>
      <div class="col-xs-1">
        {{currentKeg.abv}}%
      </div>
      <div class="col-xs-2">
        {{currentKeg.description}}
      </div>
      <div class="col-xs-2">
        {{currentKeg.pintsRemaining}}
      </div>
      <div class="col-xs-2 manage-buttons">
        <input type="image" src="/resources/style/beer.png" (click)="takeADrink(currentKeg)" />
        <input type="image" src="/resources/style/growler.png" (click)="growlerTime(currentKeg)" />
        <input type="image" src="/resources/style/pencil.png" (click)="editButtonHasBeenClicked(currentKeg)" />
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;
  filterByType: string = "allBeer";


  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  colorizeBeer(currentKeg){
    if (currentKeg.price <= 4){
      return "red";
    } else if (currentKeg.price < 7) {
      return  "goldenrod";
    } else {
      return "black";
    }
  }

  takeADrink(clickedKeg: Keg){
    clickedKeg.pintsRemaining --;
  }

  growlerTime(clickedKeg: Keg){
    clickedKeg.pintsRemaining -=  2;
  }

  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu
  }
}
