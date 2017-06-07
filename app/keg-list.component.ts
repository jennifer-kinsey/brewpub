import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-3 bold">
        Beer
      </div>
      <div class="col-sm-1 bold">
        Variety
      </div>
      <div class="col-sm-1 bold">
        Price/Pint
      </div>
      <div class="col-sm-1 bold">
        ABV
      </div>
      <div class="col-sm-2 bold">
        Description
      </div>
      <div class="col-sm-2 bold">
        Pints Left
      </div>
      <div class="col-sm-2 bold">
        Action
      </div>
    </div>
    <div class="row"  *ngFor="let currentKeg of childKegList">
      <div class="col-sm-3" [class]="colorizeBeer(currentKeg)">
        {{currentKeg.brand}} {{currentKeg.name}}
      </div>
      <div class="col-sm-1">
        {{currentKeg.type}}
      </div>
      <div class="col-sm-1">
        &#36;{{currentKeg.price}}
      </div>
      <div class="col-sm-1">
        {{currentKeg.abv}}%
      </div>
      <div class="col-sm-2">
        {{currentKeg.description}}
      </div>
      <div class="col-sm-2">
        {{currentKeg.pintsRemaining}}
      </div>
      <div class="col-sm-2">
        <button class="btn btn-success spacer">Take a Drink</button>
        <button class="btn btn-warning spacer">Growler Time</button>
        <button class="btn btn-danger spacer" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter;

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
}
