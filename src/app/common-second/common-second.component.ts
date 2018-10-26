import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-second',
  templateUrl: './common-second.component.html',
  styleUrls: ['./common-second.component.css']
})
export class CommonSecondComponent implements OnInit {

  //  @Input() 定义接收父组件的值
  @Input() xuance;
  name: string;

  @Output() clickEvent = new EventEmitter();

  setData() {
    // emit负责 向父组件传值
    this.clickEvent.emit('百里守约--子定义');
  }

  constructor() { }

  ngOnInit() {
    this.name = this.xuance;
  }

}
