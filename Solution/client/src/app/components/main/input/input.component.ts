import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class UserInputComponent implements OnInit {
  iataCodes: string[] = [];
  userInputs: any = {
    from: 'any',
    to: 'any',
    directOnly: false,
    range: { min: 0, max: 3500 },
  };
  rangeOptions: Options = {
    floor: 0,
    ceil: 3500,
    translate: (value: number, label: LabelType): string => {
      this.handleValChange();
      switch (label) {
        case LabelType.Low:
          return 'Min: <small>$</small>' + value;
        case LabelType.High:
          return 'Max: <small>$</small>' + value;
        default:
          return '<small>$</small>' + value;
      }
    },
  };

  @Output() valuesChanged: EventEmitter<any> = new EventEmitter();

  handleValChange() {
    this.valuesChanged.emit(this.userInputs);
  }

  constructor(private apiS: ApiService) {}

  ngOnInit(): void {
    this.apiS
      .getIataCodes()
      .then((result) => {
        this.iataCodes = result.data;
      })
      .catch((err) => console.log(err));
  }
}
