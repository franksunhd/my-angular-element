import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  str: string;
  constructor(public active: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.active.snapshot.data[0]);
    this.str = this.active.snapshot.data[0].str;
  }

}
