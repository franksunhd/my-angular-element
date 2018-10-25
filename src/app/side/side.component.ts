import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  liubei = '玄德';
  bool = true;
  baidu = 'http://www.baidu.com';
  img = '';
  item = 0;
  modelVal = 'modelValue';
  green = 'green';
  bgGreen = 'red';
  arrList = ['千里共婵娟', '海上升明月', '明月照沟渠'];
  heroList = [
    {name: '唐僧', age: 20 },
    {name: '悟空', age: 19 },
    {name: '八戒', age: 18 },
    {name: '沙僧', age: 17 },
  ];
  witch = '英雄联盟';

  // 声明类型 ts是强类型的语言 声明类型的时候必须声明类型
  dong: string;

  constructor() {
    this.dong = '我问';
  }

  ngOnInit() {
  }

  msg() {
    this.item = this.item + 1;
  }

  color(ev) {
    ev.style.color = 'red';
  }

  changeVal() {
    this.dong = '22222';
  }

}
