import { Pipe, PipeTransform } from '@angular/core';
// 使用 PipeTransform 接收两个参数
// 第一个参数为 输入的值 第二个参数可选 代表经过操作返回的值

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  // ?: 代表参数可选 与三目运算符无关
  // value: 指的是 | 前边的数据(也就是要过滤的数据)
  // args 指的是传入的参数, 类似于内置过滤器 : 后面的内容(比如:$,#.....)
  // {{ 123456789 | number:'2.2'}} 此例中 value代表:123...部分  args代表:2.2部分
  transform(value: any, args?: any): any {
    // 判断输入的文本
    if (!args) {
      args = '不如';
    }
    return value + args + '回家卖红薯';
  }

}
