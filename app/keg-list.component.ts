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
    <div class="row">
      <div class="col-xs-3 bold">
        Beer
      </div>
      <div class="col-xs-1 bold">
        Variety
      </div>
      <div class="col-xs-1 bold">
        Price/Pint
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
        <div [class]="addBeerIcon(currentKeg)">
          {{currentKeg.brand}} {{currentKeg.name}}
        </div>
      </div>
      <div class="col-xs-1">
        {{currentKeg.type}}
      </div>
      <div class="col-xs-1">
        <div [class]="colorizeBeer(currentKeg)">
          &#36;{{currentKeg.price}}
        </div>
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
      <div class="col-xs-2">
        <button class="btn btn-success spacer" (click)="takeADrink(currentKeg)" >Take a Drink</button>
        <button class="btn btn-warning spacer" (click)="growlerTime(currentKeg)">Growler Time</button>
        <button class="btn btn-danger spacer" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;
  filterByPintness: string = "lowKegs"

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  colorizeBeer(currentKeg){
    if (currentKeg.price <= 4){
      return "bg-danger";
    } else if (currentKeg.price < 7) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  addBeerIcon(currentKeg){
    if (currentKeg.abv <= 5){
      console.log(currentKeg.name + " less than 5 abv");
    } else if (currentKeg.abv < 7.5) {
      console.log(currentKeg.name +  "less than 7.5");
    } else {
      console.log(currentKeg.name + "more than 7.5");
    }
  }

  takeADrink(clickedKeg: Keg){
    clickedKeg.pintsRemaining --;
  }

  growlerTime(clickedKeg: Keg){
    clickedKeg.pintsRemaining -=  2;
  }
}
