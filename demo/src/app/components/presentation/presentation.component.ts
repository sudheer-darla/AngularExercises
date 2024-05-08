import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  @Input('selectedNumber') number = 0;
  @Input('selectedOperation') operation = '';

  result = 0;

  GetResult() {
    console.log(`GetResult: ${this.operation}, ${this.number}`);
    switch (this.operation) {
      case 'double':
        return this.number * 2;
      case 'triple':
        return this.number * 3;
      case 'square':
        return this.number * this.number;
      case 'half':
        return Math.floor(this.number / 2);
      default:
        return -1;
    }
  }
}
