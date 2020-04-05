# Lab4设计文档

###### 17300290033高祥兴

##### 地址：https://github.com/CharlesGao04/SOFT130002_lab/tree/master/lab4

#### 1.导航栏：

使用bootstrap的**.navbar-header**，指定div元素为导航条组件包裹品牌图标及切换按钮，同时使用**.navbar-inverse**指定导航条组件为黑色主题，外面通过**container-fluid**完成自适应屏幕宽度

```
<div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img alt="Brand" src="images/logo.png" width="40px" height="40px"></a>
          </div>
```

具体内容通过**.navbar-collapse**来设置导航栏的组件的父元素，以及通过.navbar-nav设置ul为导航栏内列表元素

```
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  <ul class="nav navbar-nav">
    <li class="active"><a href="index.html">Home <span class="sr-only">(current)</span></a></li>
    <li><a href="src/html/browse.html">Browse</a></li>
    <li><a href="src/html/search.html">Search</a></li>
  </ul>
```


#### 2.头图：

轮播通过bootstrap的carousel完成，具体内容助教已完成

```
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
```


#### 3.图片展示：

主要通过bootstrap中的栅格系统完成，六张图分三个**col-md-4**水平排列

```
<div class="row">
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Title
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="panel-body">
                        <a href="#"><img class="pic1" src="images/travel_images/222223.jpg" width="220px" height="220px;" style="margin-left:10%"/></a>
                        <br>
                        <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"> This is my first picture! Thank you for visiting!</div>
                    </div>
                </div>
            </div>
```


#### 4.页脚：

同样通过bootstrap中的栅格系统**col-md-3**完成，加上四个常用矢量图标和个人微信截图

```
 <footer>
        <div class="container">
           <div class="row">
              <div class="col-md-3">
```

#### 5.辅助图标：

刷新和回到顶部，加上矢量图标，href链接当前页面，刷新通过alert提示，与原有一致
