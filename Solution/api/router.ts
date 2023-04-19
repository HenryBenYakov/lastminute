import express, { Router, Request, Response } from "express";
import { JSONConverter } from "./converter";

import JSON1 from "./json/Raw_data OW.json";
import JSON2 from "./json/Raw_data OW - 2pax.json";
import JSON3 from "./json/Raw_data RT - 2pax.json";

export const router: Router = express.Router();

const DB: any = JSON1;

router.get("/search", async (req: Request, res: Response) => {
  try {
    const data = JSONConverter(DB);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/iata-codes", async (req: Request, res: Response) => {
  try {
    let iata = new Set();
    for (let flight of DB) {
      flight.Segments[0].Legs.forEach((leg: any) => {
        iata.add(leg.DeparturePoint.AirportCode);
        iata.add(leg.ArrivalPoint.AirportCode);
      });
    }
    res.status(200).send(Array.from(iata));
  } catch (err) {
    res.status(400).json(err);
  }
});
