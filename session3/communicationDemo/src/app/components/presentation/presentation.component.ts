import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  @Input() value = 0;
  @Input() operation = 1;

  CalculateResult(): number {
    switch (this.operation) {
      case 1:
        return this.value * 2;
      case 2:
        return this.value * 3;
      case 3:
        return this.value * this.value;
      case 4:
        return Math.floor(this.value / 2);
      default:
        return -1;
    }
  }
}
