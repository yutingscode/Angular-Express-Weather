import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {

  // server url
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // get weather details
  async post(name: string) {
    const body = {name:name};
    return await lastValueFrom(this.http.post(this.url, body));
  }
}


