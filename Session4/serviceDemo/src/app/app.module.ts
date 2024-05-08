import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { DataService } from './services/data.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [AppComponent, SenderComponent, ReceiverComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DataService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
