import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { MainComponent } from './components/main/main.component';
import { DataComponent } from './components/data/data.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OperatorComponent } from './components/operator/operator.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, MainComponent, DataComponent, PresentationComponent, OperatorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
