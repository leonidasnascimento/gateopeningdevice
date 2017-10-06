import { Component } from '@angular/core';
import { DeviceModel } from './device-model';
import { HttpClient } from './../httpModule/httpClientModule';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form-component.html'
})

export class DeviceFormComponent {
  model = new DeviceModel();

  submitted = false;

  onSubmit() {
    this.submitted = true;

    alert(new HttpClient()
      .Post('https://gateopeningdevice.azurewebsites.net/device', this.model));
  }

  constructor() {
    this.model.createdDate = new Date().toLocaleDateString();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
