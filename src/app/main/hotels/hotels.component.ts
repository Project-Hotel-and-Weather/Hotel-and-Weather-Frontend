import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  @Input() cityName: String;
  @Input() sumbitParent: Subject<void>;
  long: number = 0;
  hotels: any = [];
  randomSetNumber = new Array<number>();
  hotelsImage = new Map<number, string>([
    [1, '../assets/images/1.jpg'],
    [2, '../assets/images/2.jpg'],
  ]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sumbitParent.subscribe(() => this.urlShoot());
  }
  urlShoot() {
    this.http
      .get(
        'https://hotel-and-weather.herokuapp.com/hotel?location=' +
          this.cityName
      )
      .subscribe((data) => {
        this.hotels = data;
        this.long = this.hotels.length;
        console.log('hotels', this.hotels);
        this.kupa();
        for (let i = 0; i < this.long; i++) {
          this.hotels[i].url = this.randomSetNumber[i];
        }
      });
  }
  kupa() {
    for (let i = 0; i < this.long; i++) {
      const rndInt = this.randomNumber(1, 2);
      this.randomSetNumber.push(rndInt);
    }
  }
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
