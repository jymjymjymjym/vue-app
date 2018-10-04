# webpack-study
黑马 vue

# 项目记录

> MUI 找不到icon 去找 extra-ico 检测源码找到需要引用的文件 "../src/extra-icon.css"

> 然后报错找不到 ttf, 到 example 目录下面找 ttf, 而非 dist

> mint 的 swiper 的默认最外层高度为 0, 鬼知道为什么子div撑不起它, 得手动给个高度, 否则什么都看不到

> 轮播图用 v-for 记得加 key; 另外 img 不是加 src="item.url" (  应该是 :src="item.url" )

> UI库有时会给 body 默认乳白, 可以在直接在入口(index.html) 给body 设置行内样式

> 加动画后异常原因: 
> - 切换路由时, 页面被放大2倍, 故顶部跑到右侧  `mode="out-in"  可以解决`; 但不能解决问题;
> - 需要在出去时同时进入, 去掉上面设置
>   给整个模版 App.vue 的 div.container 加 `overflow-x: hidden;` ;
>   position: absolute; 解决位置上下变动问题 
```css
.v-enter{
  opacity: 0;
  transform: translateX(100%)     //进来的从右边 100 开始
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);   //离开的往左走 100
  position: absolute;
}
```

