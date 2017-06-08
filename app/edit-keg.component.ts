import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <p>Pints remaining: {{childSelectedKeg.pintsRemaining}}</p>
      <hr>
      <h3>Edit Keg</h3>
      <label>Enter New Name:</label><br>
      <input [(ngModel)]="childSelectedKeg.name"><br>
      <label>Enter New Brand:</label><br>
      <input [(ngModel)]="childSelectedKeg.brand"><br>
      <label>Enter New Price:</label><br>
      <input type="number" [(ngModel)]="childSelectedKeg.price"><br>
      <label>Enter New ABV:</label><br>
      <input type="number" [(ngModel)]="childSelectedKeg.abv"><br>
      <label>Enter New Description:</label><br>
      <input [(ngModel)]="childSelectedKeg.description"><br>
      <label>Enter New Type:</label><br>
      <input [(ngModel)]="childSelectedKeg.type"><br>

      <button class="btn btn-primary"(click)="editButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }
}
