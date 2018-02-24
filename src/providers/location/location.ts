
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
	lat
	
	long

  constructor(private geolocation: Geolocation) {
    console.log('Hello LocationProvider Provider');
  }

getUserLocation(){
	return this.geolocation.getCurrentPosition()
}
}
