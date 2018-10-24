import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }

  ngOnInit() {
  }

}
