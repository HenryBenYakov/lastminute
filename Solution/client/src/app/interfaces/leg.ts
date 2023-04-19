export interface ILeg {
  DeparturePoint: {
    AirportName: string;
    AirportCode: string;
    City: string;
    DateTime: string;
  };
  ArrivalPoint: {
    AirportName: string;
    AirportCode: string;
    City: string;
    DateTime: string;
  };
  FlightNumber: string;
  AirlineName: string;
  AirlineCode: string;
}
