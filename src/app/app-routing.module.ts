// ng generate module app-routing --flat --module=app
// --flat 把这个文件放进了 src/app 中，而不是单独的目录中。
// --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*
* angular中的路由
* 1. routes 所有的路由信息都在 routes 配置
* 2. router-outlet 展示路由页面的窗口,只要有路由的切换,都会在该组件中显示
* 3. router: 导航对象,通过对 router 的调用实现对路由的切换
* 4. routerLink 和 a 标签类似,通过他可以跳转路由路径
* 5. ActivatedRoute 通过该模块,可以获取路由传的数据信息
*
* 子路由是指组件当中还有一个 router-outlet 组件
*/


import { HeadComponent } from './head/head.component';
import { HttpComponent } from './http/http.component';
import { PipeComponent } from './pipe/pipe.component';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';

/*
 * 1. 路由是自上而下查找的
 * 2. 路由的配置不用向vue中一样 带 /
 * 3. ** 指代的是路由找不到的情况
 *
 * 路由配置在对象中,以 json 的形式配置
 * path: 代表访问的路径
 * component: 代表如果访问了设置的路径,在视图中显示组件
 */


const routes: Routes = [
  {path: '', component: IndexComponent},
  // 1. 设置传值 data中携带需要传递的值
  {path: 'home', component: HomeComponent, data: [{str: '清明时节雨纷纷'}]},
  {path: 'side', component: SideComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'http', component: HttpComponent},
  // 2. 路径传值
  {path: 'project/:name/:age', component: ProjectComponent},
  // 3. 把要传的值 放到 a 标签上 json数据放到 queryParams 上
  {path: 'head', component: HeadComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  // 切记 要有导出
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
