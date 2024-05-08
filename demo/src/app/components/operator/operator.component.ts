import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.css',
})
export class OperatorComponent {
  @Output() operationSelection = new EventEmitter<string>();

  OnClick(val: string) {
    this.operationSelection.emit(val);
    console.log('emitting ', val);
  }
}
