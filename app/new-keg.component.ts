import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `

    <h1>New Keg</h1>
    <div>
      <label>Enter New Name:</label><br>
      <input #newName><br>
      <label>Enter New Brand:</label><br>
      <input #newBrand><br>
      <label>Enter New Price:</label><br>
      <input type="number" #newPrice><br>
      <label>Enter New ABV:</label><br>
      <input type="number" #newAbv><br>
      <label>Enter New Description:</label><br>
      <input #newDescription><br>
      <label>Enter New Type:</label><br>
      <input #newType><br>
      <button class="btn btn-info" (click)="
            submitForm(newName.value, newBrand.value, newPrice.value, newAbv.value, newDescription.value, newType.value);
            newName.value = '';
            newBrand.value ='';
            newPrice.value = '';
            newAbv.value = '';
            newDescription.value = '';
            newType.value = '';
      ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number, description: string, type: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv, description, type);
    this.newKegSender.emit(newKegToAdd);
  }
}
