import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationProvider} from '../../providers/location/location'
import {HttpProvider} from '../../providers/http/http'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController
  	,public http:HttpProvider, public locProv:LocationProvider) {

  }

ionViewDidLoad(){
	this.locProv.getUserLocation().then((resp)=>{
		this.http.getWeather(resp.coords.latitude,
			resp.coords.longitude).subscribe((data)=>{
console.log(data)
		})

	}).catch((err)=>{

	})

}
}
