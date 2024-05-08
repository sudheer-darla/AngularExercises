import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { OperationComponent } from './components/operation/operation.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MainComponent } from './components/main/main.component';
import { FirstFivePipe } from './first-five.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    OperationComponent,
    PresentationComponent,
    MainComponent,
    FirstFivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
