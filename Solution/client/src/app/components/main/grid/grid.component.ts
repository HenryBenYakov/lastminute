import { Component, Input, OnInit } from '@angular/core';
import { IFlight } from 'src/app/interfaces/flight';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  maxCards: number = 12;
  currentPage: number = 1;

  @Input() flights: IFlight[] = [];
  userInputs: any = { from: 'any', to: 'any' };

  currentlySortingBy: string = 'price';
  sortReverserIndicators: any = { price: false, stops: false };

  math: any = Math;

  constructor() {}

  ngOnInit(): void {}

  handleValuesChanged(newVal: any) {
    this.userInputs = newVal;
    this.currentPage = 1;
  }

  handlePageChange(type: string) {
    switch (type) {
      case 'inc':
        this.currentPage += 1;
        break;

      case 'dec':
        this.currentPage -= 1;
        break;
    }
  }

  handleSortChange(key: string, reversedArr: boolean) {
    this.currentlySortingBy = key;
    this.sortReverserIndicators[key] = reversedArr;
  }

  checkIfThisSortIsActive(type: string, val: boolean): boolean {
    return (
      this.sortReverserIndicators[type] == val &&
      this.currentlySortingBy == type
    );
  }
}
