import { Component } from '@angular/core';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  constructor(private weatherService : WeatherService, private locationService : LocationService, private router : Router) {
  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
