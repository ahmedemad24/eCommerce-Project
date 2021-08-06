import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any,filterCity:string ) {


    if (value.length===0 || filterCity ==='' ) {
      return  value

    }


    var city=[]
    for(var cities of value){

      if (cities['houseCity'].toLowerCase().match(filterCity.toLowerCase())) {

         city.push(cities);
      }
    }


    return city


  }

}
