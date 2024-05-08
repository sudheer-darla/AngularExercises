import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  paramSub: Subscription;

  canEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.paramSub = this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    // this.server = this.serversService.getServer(1);
    this.route.queryParams.subscribe((queryparmas) => {
      const flag = queryparmas['allowEdit'];
      this.canEdit = flag === '1' ? true : false;

      console.log(this.canEdit, flag);
    });
  }

  OnEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
