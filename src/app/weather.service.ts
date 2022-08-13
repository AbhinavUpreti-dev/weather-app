import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getWeather(city:string):Observable<Weather>{
    const options = new HttpParams()
    .set('units','metric')
    .set('q',city)
    .set('appId',"8fbcab098aa694c8c6528650eb3768ab");

    return this.httpClient.get<Weather>("https://api.openweathermap.org/data/2.5/" + 'weather',{params:options});
  }
}
