import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../Authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authservice: AuthenticationService
  ) {}

  ngOnInit() {}

  onGotoServers() {
    // complex logic
    console.log(this.activeRoute);
    this.router.navigate(['/servers'], { relativeTo: this.activeRoute });
  }
  OnLoadServer(id: number) {
    this.router.navigate(['/servers', id], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  Login() {
    console.log('Logging in');

    this.authservice.Login();
  }

  Logout() {
    console.log('Logging out');
    this.authservice.Logout();
  }
}
