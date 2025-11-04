---
title: Html 笔记
createTime: 2025/08/24 00:25:16
permalink: /article/pzbpy95z/
---
# HTML 笔记

##  marquee：跑马灯元素

<img referrer="no-referrer" src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/WeChat_20241011143155.gif"/>

```html
      <div class="page-plate-group page-plate-group-case">
        <MARQUEE scrollAmount="3" scrollDelay="50" direction="right" width="100%" height="100" behavior="alternate">
          <div class="page-plate-group-case-item-box" v-for="item in 31" :key="item">
            <img class="page-plate-group-case-item" :src="`/img/case/group5_case_${item + 1}.jpg`" alt="" />
          </div>
        </MARQUEE>
        <MARQUEE scrollAmount="3" scrollDelay="50" direction="left" width="100%" height="100" behavior="alternate">
          <div class="page-plate-group-case-item-box" v-for="item in 31" :key="item">
            <img class="page-plate-group-case-item" :src="`/img/case/group5_case_${item + 33}.jpg`" alt="" />
          </div>
        </MARQUEE>
        <div class="page-plate-group-case-left"></div>
        <div class="page-plate-group-case-right"></div>
      </div>
```

> CSS 遮罩层

```css
.page-plate-group-case-left {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 230px;
  height: 260px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(255, 255, 255, 0.3)),
    color-stop(55%, #ffffff)
  );
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, #ffffff 55%);
}
.page-plate-group-case-right {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 230px;
  height: 260px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0.3)),
    color-stop(55%, #ffffff)
  );
  background: linear-gradient(-270deg, rgba(255, 255, 255, 0.3) 0%, #ffffff 55%);
  border-radius: 0px 0px 0px 0px;
}			
```

