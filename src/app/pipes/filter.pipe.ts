import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterCity:string ) {


    if (value.length===0 || filterCity ==='' ) {
      return  value

    }


    var city=[]
    for(var cities of value){

      if (cities['houseStreet'].toLowerCase().match(filterCity.toLowerCase())) {

         city.push(cities);
      }
    }


    return city


  }


}
