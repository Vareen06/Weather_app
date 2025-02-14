import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviornment } from './enviornment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = enviornment.apiURL;
  private apiKey = enviornment.apiKEY;  

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any>{
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${location}`)
  }

  getWeatherfor5days(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${location}&days=5`);
  }
}
