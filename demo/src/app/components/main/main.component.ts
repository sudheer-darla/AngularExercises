import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  selectedNumber = 0;
  selectedOperation = '';

  OnValueChange(event: any) {
    console.log(event);
    this.selectedNumber = event;
  }

  OnOperationSelection(event: string) {
    this.selectedOperation = event;
    console.log(this.selectedOperation);
  }

  OnOperationChange(event: string) {
    this.selectedOperation = event;
  }
}
