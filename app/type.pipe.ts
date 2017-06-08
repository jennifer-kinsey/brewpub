import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

declare var jQuery:any;

@Pipe({
  name: 'type',
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Keg[], desiredType){
    var output: Keg[] = [];
    if (desiredType === "Ale"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Ale") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "IPA"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "IPA") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Stout"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Stout") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Lager"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Lager") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Porter"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Porter") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Pilsner"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Pilsner") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Saison"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Saison") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "Bock"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "Bock") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredType === "AllBeer"){
      return input;
      console.log(input);
      alert("test");
    } else if (desiredType === "Other"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].type !== "IPA" && input[i].type !=="Stout" && input[i].type !=="Ale" && input[i].type !=="Lager" && input[i].type !=="Porter" && input[i].type !=="Pilsner" && input[i].type !=="Saison" && input[i].type !=="Bock")
          output.push(input[i]);
        }
        return output;
      }
  }


// } else {
//   return ;
// }
// if (output.length = 0) {
//   jQuery('#type-beer').show();
// }
// console.log(output)
// return output;
