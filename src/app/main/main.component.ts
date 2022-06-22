import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  city: String = '';
  cityName: String = '';
  sumbitParent: Subject<void> = new Subject<void>();

  click() {
    this.sumbitParent.next();
  }

  onSubmit(form: NgForm) {
    this.cityName = form.value.city;
    this.cityName = this.city.split(' ').join('+');
    return this.cityName;
  }
}
