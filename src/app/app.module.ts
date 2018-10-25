// 引入模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// 引用组件
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SideComponent } from './side/side.component';
import { HttpComponent } from './http/http.component';
import { PipeComponent } from './pipe/pipe.component';

// 引入指令
import { MyDirsDirective } from './myDir/my-dirs.directive';

// 引入管道
import { PipePipe } from './pipe/pipe.pipe';
import { NumPipe } from './pipe/num.pipe';

// 引入服务
import { HeroService } from './hero/hero.service';
import { BookService } from './service/book.service';

@NgModule({
  // 调用组件/指令/管道
  declarations: [
    AppComponent,
    HeadComponent,
    SideComponent,
    HttpComponent,
    PipeComponent,
    MyDirsDirective,
    PipePipe,
    NumPipe,
  ],
  // 调用模块
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // 调用服务
  providers: [
    HeroService,
    BookService
  ],
  // 调用依赖
  bootstrap: [AppComponent]
})
export class AppModule { }
