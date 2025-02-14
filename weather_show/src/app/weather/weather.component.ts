import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string = '';
  forecastData: any = null;
  errorMessage: string = '';
  today: boolean = true;

  constructor(private weatherService: WeatherService) {}

  getWeatherfor5days() {
    if (!this.location) {
      this.errorMessage = 'Please enter a location.';
      return;
    }
    this.weatherService.getWeatherfor5days(this.location).subscribe(
      (data) => {
        this.forecastData = data.forecast.forecastday;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Weather data not available for this location.';
        this.forecastData = null;
      }
    );
    this.today = false
  }

  getWeather(){
    if (!this.location) {
      this.errorMessage = 'Please enter a location.';
      return;
    }
    this.weatherService.getWeather(this.location).subscribe(
      (data) => {
        this.forecastData = data.forecast.forecastday;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Weather data not available for this location.';
        this.forecastData = null;
      }
    );
    this.today = true
  }
}
