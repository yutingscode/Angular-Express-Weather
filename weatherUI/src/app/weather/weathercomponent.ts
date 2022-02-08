import { Component, OnInit,OnChanges} from '@angular/core';
import { WeatherService } from '../weather-service/weather.service'
import { FormBuilder } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
//import {  IWeather } from '../weather-service/weather.details'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  weather:any = {
    "name": "",
    "temp": ""
  };

  submissionForm = this.formBuilder.group({
    name: ''
  })
  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  onSubmit() {
    const name = this.submissionForm.value['name'];
    this.weatherService.post(name).then((result) => this.tempConvertor(result));
    this.submissionForm.reset();
  }

  tempConvertor(result: any) {
    var  celsius = (Math.floor(result.main.temp - 273.15).toString());
    console.log(celsius);
    this.weather.name = result.name;
    this.weather.temp = celsius;
  }
}
