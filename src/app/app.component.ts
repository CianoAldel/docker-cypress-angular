import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  input1?: number;
  input2?: number;
  sum?: number;

  constructor() {}

  sumNumber() {
    this.sum = this.input1! + this.input2!;
  }
}
