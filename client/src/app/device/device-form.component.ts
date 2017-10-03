import { Component } from '@angular/core';
import { DeviceModel } from './device-model';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form-component.html'
})

export class DeviceFormComponent {
  model = new DeviceModel(1, 'iPhone do Leônidas', 'a162bff1e2424423b433a3992221e353', new Date());

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
