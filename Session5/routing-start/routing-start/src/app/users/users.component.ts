import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Abhinav',
    },
    {
      id: 2,
      name: 'Bhaskar',
    },
    {
      id: 3,
      name: 'Krishna',
    },
  ];
}
