import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost:3001/api/flights/';

  getFlights(): Promise<any> {
    return axios.get(this.baseURL + 'search');
  }

  getIataCodes(): Promise<any> {
    return axios.get(this.baseURL + 'iata-codes');
  }

  constructor() {}
}
