import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {
  @Input('appMyDir') set unless (bool: boolean) {
    if (bool) {
      // 说明属性赋值为 true 把视图清空
      this.viewContainerRef.clear();
      console.log('隐藏视图');
    } else {
      // 创建视图,并且把视图的内容放进创建的视图中
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      console.log('显示视图');
    }
  }

  // 依赖注入
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

}
