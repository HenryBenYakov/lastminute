export interface Leg {
  DeparturePoint: string;
  ArrivalPoint: string;
  FlightNumber: string;
  AirlineName: string;
  AirlineCode: string;
}

export interface Segment {
  Legs: Leg[];
  SegmentDuration: number;
  ValidatingCarrier: string;
}

export interface Flight {
  ID: string;
  Segments: Segment[];
  AveragePrice: number;
  CurrencySymbol: string;
}
