import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, range:any){
    if (value.length===0  || range === null ) {

      return  value
    }


    var number=[]
    for(var Price of value){
      if (Price['housePrice'] <= range) {
        number.push(Price);
      }
    }

  return number
  }

}
