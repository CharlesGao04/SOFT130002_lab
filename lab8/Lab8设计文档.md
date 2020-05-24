# Lab8设计文档

###### 17300290033高祥兴

#### 任务一

先用document.write将css样式调整为与助教所给样例一致，然后轮播图片其实改变wrap的left即可，需要注意边界处理，当left分别为-3600px和0px时为边界，其余时候右移即为-600px，左移即为+600px；由于当前图片所在的数值为红色，由css知道on是将backgroud-color改为red，所以用一个num变量表示当前所指图片，并将该点className变为on，其余点颜色不变，仍然为绿色

#### 任务二

在play函数中用setInterval来设置时间间隔2s，把nextOnePic也就是任务一中所写的下一张图片的函数放进去，再给container两个addEventListener，一个是mouseover，另一个是mouseout，分别表示鼠标移入和移出的效果，为了让页面加载时就自动播放，即一开始就运行play函数

#### 任务三

给每一个点也就是span加一个onclick触发的函数，即图片切换到对应数字的图片，注意边界值处理，同时记得将num变量改为对应数字，因为要调用任务一中的changeDot函数来改变数字颜色

#### 任务四

用jQuery实现，给表格里面每一个td添加一个dblclick事件，先拿到td原来的值，然后将这个td变成一个input:text，并且原来的值不动，最后失去焦点时，这个td变为原来的text，value为修改过后的value