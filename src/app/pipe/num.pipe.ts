import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumPipe implements PipeTransform {
  arrObj = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  str = '';
  i = 0;
  transform(value: any, args?: any): any {
    this.str = '';
    for (this.i = 0; this.i < value.length; this.i++) {
      if (value[this.i] >= 0 || value[this.i] < 10) {
        this.str += this.arrObj[value[this.i]];
      }
    }
    return this.str;
  }

}
