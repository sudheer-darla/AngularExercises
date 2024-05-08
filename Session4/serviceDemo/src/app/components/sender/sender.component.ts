import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LogService } from '../../services/log.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  messageToSent = '';

  constructor(
    private dataSvc: DataService,
    private logger: LogService,
    private testSvc: TestService
  ) {}
  OnSend(val: string) {
    this.messageToSent = val;
    console.log('Message to send: ', this.messageToSent);
    this.dataSvc.SetMessage(this.messageToSent);
    // this.logger.logError(this.messageToSent);
    this.testSvc.show();
  }
}
