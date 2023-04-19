import { Pipe, PipeTransform } from '@angular/core';
import { IFlight } from '../interfaces/flight';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(flights: IFlight[], type: string, reverse: boolean): any {
    if (!Array.isArray(flights)) {
      return flights;
    }
    switch (type) {
      case 'price':
        flights.sort((a: IFlight, b: IFlight) => {
          if (a.AveragePrice < b.AveragePrice) {
            return -1;
          } else if (a.AveragePrice > b.AveragePrice) {
            return 1;
          } else return 0;
        });
        break;

      case 'stops':
        flights.sort((a: IFlight, b: IFlight) => {
          if (a.Segments[0].Legs.length < b.Segments[0].Legs.length) {
            return -1;
          } else if (a.Segments[0].Legs.length > b.Segments[0].Legs.length) {
            return 1;
          } else return 0;
        });
        break;
    }
    if (reverse) return flights.reverse();
    return flights;
  }
}
