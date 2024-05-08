import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  @Output() sendData = new EventEmitter<number>();

  OnChange(event: any) {
    var value = event.target.value;
    console.log('Emitting the data : ', value);
    this.sendData.emit(value);
  }
}
