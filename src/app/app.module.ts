import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
