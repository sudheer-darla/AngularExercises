import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  message = "";

  ngOnInit(): void {
    this.route.data.subscribe((result: Data) => {
      this.message = result['message'];
    })
  }

}
