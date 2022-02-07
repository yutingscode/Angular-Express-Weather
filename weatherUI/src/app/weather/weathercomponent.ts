import { Component, OnInit,OnChanges} from '@angular/core';
import { WeatherService } from '../weather-service/weather.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  weather:any = [];

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
    this.weatherService.post(name).then((result) => this.weather = result);
    this.submissionForm.reset();
  }
}
