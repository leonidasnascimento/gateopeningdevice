import { DeviceModel } from './device-model';
import { HttpClient } from './../httpModule/httpClientModule';
import { Component, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form-component.html'
})

@Injectable()
export class DeviceFormComponent {
  model = new DeviceModel();

  onSubmit(): void {
    new HttpClient()
    .Post('https://gateopeningdevice.azurewebsites.net/device', this.model, this.http)
    .then(function (msg) {
      alert(msg);
    });
  }

  constructor (@Inject(Http) private http: Http) {
    this.model.createdDate = new Date().toLocaleDateString();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
