import { ILeg } from './leg';

export interface IFlight {
  ID?: string;
  Segments: {
    Legs: ILeg[];
    SegmentDuration: number;
    ValidatingCarrier: string;
  }[];
  AveragePrice: number;
  CurrencySymbol: string;
}
