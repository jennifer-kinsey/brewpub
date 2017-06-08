import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

declare var jQuery:any;

@Pipe({
  name: 'pintness',
  pure: false
})

export class PintnessPipe implements PipeTransform {
  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].pintsRemaining < 124) {
        output.push(input[i])
      }
    }
    if output.length > 0{
      jQuery('.low-on-beer').show();
    }
    return output;
  }
}
