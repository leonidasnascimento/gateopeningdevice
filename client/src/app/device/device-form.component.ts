import { Component } from '@angular/core';
import { DeviceModel } from './device-model';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form-component.html'
})

export class DeviceFormComponent {
  model = new DeviceModel();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    alert(this.diagnostic);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
