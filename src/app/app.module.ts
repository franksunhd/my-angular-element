// 引入模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 引用组件
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SideComponent } from './side/side.component';
import { HeroService } from './hero/hero.service';
import { MyDirDirective } from './myDir/my-dir.directive';

@NgModule({
  // 调用组件
  declarations: [
    AppComponent,
    HeadComponent,
    SideComponent,
    MyDirDirective
  ],
  // 调用模块
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  // 调用服务
  providers: [
    HeroService
  ],
  // 调用依赖
  bootstrap: [AppComponent]
})
export class AppModule { }
