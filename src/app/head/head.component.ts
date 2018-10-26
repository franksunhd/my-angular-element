import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  userName = '';
  SexArr = [
    { id: 1, value: '男'},
    { id: 2, value: '女'},
  ];
  sex = '2';

  age: Number;
  constructor(private head: ActivatedRoute) {
  }

  ngOnInit() {
    this.userName = this.head.snapshot.queryParams.name;
    this.age = this.head.snapshot.queryParams.age;
  }

}
