import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceFormComponent } from './device/device-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DeviceFormComponent, AppComponent]
})
export class AppModule { }
