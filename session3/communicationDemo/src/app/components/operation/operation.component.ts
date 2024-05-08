import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css',
})
export class OperationComponent {
  @Output() sendOperator = new EventEmitter<number>();

  OnClick(option: number) {
    this.sendOperator.emit(option);
    console.log('Emitting operator: ', option);
  }
}
