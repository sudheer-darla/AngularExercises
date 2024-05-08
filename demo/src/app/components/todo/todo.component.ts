import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: string[] = [];
  currentTask: string = '';
  show = false;
  currDate = new Date();
  constructor() {
    setInterval(() => {
      this.currDate = new Date();
    }, 1000);
  }

  OnAdd() {
    this.show = !this.show;
    this.tasks.push(this.currentTask);
    console.log(this.tasks);
  }

  Test(choice: { type: string; value: any }): void {
    console.log(`${choice.type}, ${choice.value}`);
  }
}
