import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class LogService {
  constructor(private dataSvc: DataService) {}

  log(msg: string) {
    this.dataSvc.GetMessage();
    console.log(msg);
  }

  logError(msg: string) {
    this.dataSvc.GetMessage();
    console.error(msg);
  }
}
