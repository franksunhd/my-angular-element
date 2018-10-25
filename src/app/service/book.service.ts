import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// 使用 http 获取数据,首先在 appModule中 引入 HttpClientModule, 然后在组件中引入 HttpClient 模块

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // 需要在 这里声明 http
  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any[]>('');
  }
}
