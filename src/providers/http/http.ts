import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  getWeather(lat,long){
  	return this.http.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+long+"&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2")
  }

}
