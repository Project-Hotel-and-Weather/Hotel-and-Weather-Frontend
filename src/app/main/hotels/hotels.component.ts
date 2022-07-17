import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  // wawel = '';
  @Input() cityName: String;
  @Input() sumbitParent: Subject<void>;

  hotels: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.hotels = [];
    // this.wawel = '';
    this.sumbitParent.subscribe(() => this.urlShoot());
  }
  urlShoot() {
    this.http
      .get(
        'https://hotel-and-weather.herokuapp.com/hotel?location=' +
          this.cityName
      )
      .subscribe((data) => {
        console.log(data);
        this.hotels = data;
      });
  }
}
