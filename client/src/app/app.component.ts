import { Component } from '@angular/core';
import {  DeviceFormComponent } from './device/device-form.component';

@Component({
  selector: 'app-gateopeningdevice',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<app-device-form></app-device-form>'
})

export class AppComponent {
  title = 'app';
}
