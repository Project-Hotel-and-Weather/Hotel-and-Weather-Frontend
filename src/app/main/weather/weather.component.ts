import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() cityName: String;
  @Input() sumbitParent: Subject<void>;
  weathers: any = [];
  // dayOfTheWeek: 'today',
  // main: 'cloud',
  // tempDay: '30',
  // tempNight: '10',
  // humidity: '20%',

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sumbitParent.subscribe(() => this.urlShoot());
  }
  urlShoot() {
    this.http
      .get(
        'https://hotel-and-weather.herokuapp.com/weather?location=' +
          this.cityName
      )
      .subscribe((data) => {
        console.log(data);
        this.weathers = data;
      });
  }
}
