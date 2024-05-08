import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  selectedNumber = 0;
  selectedOperation = 1;

  OnDataReceived(val: number) {
    this.selectedNumber = val;
    console.log('Main component value: ', this.selectedNumber);
  }

  OnOperatorReceived(option: number) {
    this.selectedOperation = option;
    console.log('Main received operator : ', this.selectedOperation);
  }
}
