import { Component, Input } from '@angular/core';
import { IFlight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() flight: IFlight = {
    Segments: [],
    AveragePrice: 0,
    CurrencySymbol: '',
  };

  showFlightDetails: boolean = false;

  handleClick() {
    this.showFlightDetails = !this.showFlightDetails;
  }

  constructor() {}

  getInfo(field: string): string {
    let segment: any = this.flight.Segments[0];

    switch (field) {
      case 'path':
        let departure: string = segment.Legs[0].DeparturePoint.AirportCode;
        let arrival: string =
          segment.Legs[segment.Legs.length - 1].ArrivalPoint.AirportCode;
        return departure + ' -> ' + arrival;

      case 'fullPath':
        let stops: Set<string> = new Set();
        let stopCount: number = this.flight.Segments[0].Legs.length - 1;
        for (let i = 0; i <= stopCount; i++) {
          stops.add(segment.Legs[i].DeparturePoint.AirportCode);
          stops.add(segment.Legs[i].ArrivalPoint.AirportCode);
        }
        return Array.from(stops).join(' -> ');

      case 'price':
        return this.flight.AveragePrice as unknown as string;

      case 'date':
        let depDate: Date = new Date(
          this.flight.Segments[0].Legs[0].DeparturePoint.DateTime
        );
        let day: number = depDate.getUTCDate();
        let month: number = depDate.getUTCMonth() + 1;
        let year: number = depDate.getUTCFullYear();
        return `${day}/${month}/${year}`;

      case 'duration':
        let hours = Math.floor(segment.SegmentDuration / 60);
        let minutes = segment.SegmentDuration % 60;
        return `${hours}:${minutes}`;

      case 'airline':
        let airlines: Set<string> = new Set();
        let stopCounter: number = this.flight.Segments[0].Legs.length - 1;
        for (let i = 0; i <= stopCounter; i++) {
          airlines.add(segment.Legs[i].AirlineName);
        }
        return Array.from(airlines).join(' and ');
    }
    return '';
  }
}
