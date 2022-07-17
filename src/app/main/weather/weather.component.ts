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
  weahterMap = new Map<string, string>([
    ['Clouds', '../assets/svg/cloudy.svg'],
    ['Clear', '../assets/svg/day.svg'],
    ['Snow', '../assets/svg/snowy-6.svg'],
    ['Rain', '../assets/svg/rainy-6.svg'],
    ['Thunder', '../assets/svg/thunder.svg'],
    ['Mist', '../assets/svg/fog.svg'],
    ['Smoke', '../assets/svg/fog.svg'],
    ['Haze', '../assets/svg/fog.svg'],
    ['Dust', '../assets/svg/fog.svg'],
    ['Fog', '../assets/svg/fog.svg'],
    ['Sand', '../assets/svg/fog.svg'],
    ['Ash', '../assets/svg/fog.svg'],
    ['Squall', '../assets/svg/fog.svg'],
    ['Tornado', '../assets/svg/tornado.svg'],
  ]);
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
