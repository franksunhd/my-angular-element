import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  obj1 = {};
  obj2 = {};

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  getFun() {
    this.http.get('/api/get').subscribe(data => {
      this.obj1 = data;
      console.log(data);
    });
  }

  postFun() {
    this.http.post('/api/post', {
      'name': '超级赛亚人',
      'age': 123
    }).subscribe(data => {
      this.obj2 = data;
    });
  }
}
