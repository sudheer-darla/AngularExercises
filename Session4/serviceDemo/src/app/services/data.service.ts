import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  currentMessage = '';

  messageSource = new Subject<string>();

  messagesObs = this.messageSource.asObservable();

  SetMessage(msg: string) {
    this.currentMessage = msg;
    console.log('CurrentMessage in service: ', this.currentMessage);
    this.messageSource.next(this.currentMessage);
  }

  GetMessage(): string {
    return this.currentMessage;
  }
}
