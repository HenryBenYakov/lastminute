import { Flight } from "./interfaces";

export const JSONConverter = (data: Flight[]): Flight[] => {
  let flightsData = [...data].map((flight) => ({
    ID: flight.ID,
    Segments: [...flight.Segments].map((seg) => ({
      Legs: [...seg.Legs].map((leg) => ({
        DeparturePoint: leg.DeparturePoint,
        ArrivalPoint: leg.ArrivalPoint,
        FlightNumber: leg.FlightNumber,
        AirlineName: leg.AirlineName,
        AirlineCode: leg.AirlineCode,
      })),
      SegmentDuration: seg.SegmentDuration,
      ValidatingCarrier: seg.ValidatingCarrier,
    })),
    AveragePrice: flight.AveragePrice,
    CurrencySymbol: flight.CurrencySymbol,
  }));
  return flightsData;
};
