import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent implements OnDestroy {
  messageFromSender = '';
  msgSubscription!: Subscription;

  constructor(private dataServ: DataService) {
    this.msgSubscription = this.dataServ.messagesObs.subscribe((data) => {
      this.messageFromSender = data;
    });
  }
  ngOnDestroy(): void {
    if (this.msgSubscription) {
      this.msgSubscription.unsubscribe();
    }
  }
}
