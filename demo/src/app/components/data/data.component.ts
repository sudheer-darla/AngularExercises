import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  @Output() sendValue = new EventEmitter();

  Send(val: string) {
    var num = +val;
    this.sendValue.emit(num);
  }
}
