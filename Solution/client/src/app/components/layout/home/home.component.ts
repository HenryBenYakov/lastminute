import { Component, OnInit } from '@angular/core';
import { IFlight } from 'src/app/interfaces/flight';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  flights: IFlight[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getFlights()
      .then((result) => {
        this.flights = result.data;
      })
      .catch((err) => console.log(err));
  }
}
