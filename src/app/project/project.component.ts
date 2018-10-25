import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name: string;
  age: string;
  constructor(public routeMsg: ActivatedRoute) { }

  ngOnInit() {
    // 1.获取路径 this.routeMsg.snapshot.params 是把路径上的参数对象对象化的属性
    // this.name = this.routeMsg.snapshot.params.name;

    // 2.通过订阅方法,此处的 data 也是把路径参数对象化
    this.routeMsg.params.subscribe(data => {
      this.name = data.name;
      this.age = data.age;
    });

    // 3. cData 文件夹里面...
  }

}
