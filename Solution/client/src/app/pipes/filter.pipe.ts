import { Pipe, PipeTransform } from '@angular/core';
import { IFlight } from '../interfaces/flight';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    flights: IFlight[],
    userInputs: any,
    filterType: string
  ): IFlight[] {
    let filteredFlights: IFlight[] = [];
    switch (filterType) {
      case 'destination':
        if (userInputs.from == 'any' && userInputs.to == 'any') return flights;
        for (let flight of flights) {
          if (
            (flight.Segments[0].Legs[0].DeparturePoint.AirportCode ==
              userInputs.from ||
              userInputs.from == 'any') &&
            (flight.Segments[0].Legs[flight.Segments[0].Legs.length - 1]
              .ArrivalPoint.AirportCode == userInputs.to ||
              userInputs.to == 'any')
          )
            filteredFlights.push(flight);
        }
        break;

      case 'direct':
        if (!userInputs.directOnly) return flights;
        for (let flight of flights) {
          if (flight.Segments[0].Legs.length <= 1) filteredFlights.push(flight);
        }
        break;

      case 'price':
        for (let flight of flights) {
          if (
            flight.AveragePrice >= userInputs.range.min &&
            flight.AveragePrice <= userInputs.range.max
          )
            filteredFlights.push(flight);
        }

        break;
    }

    return filteredFlights;
  }
}
