import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-first',
  templateUrl: './common-first.component.html',
  styleUrls: ['./common-first.component.css']
})
export class CommonFirstComponent implements OnInit {
  name = '父组件~黄忠';

  constructor() { }

  ngOnInit() {
  }

  farFun(str) {
    this.name = str;
  }


}
