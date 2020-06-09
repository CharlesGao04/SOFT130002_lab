# Lab11个人文档

###### 17300290033高祥兴

###### Github地址：https://github.com/CharlesGao04/SOFT130002_lab/tree/master/lab11

### 1.The function of cookie and session

因为HTTP协议是无状态的，即服务器不知道用户上一次做了什么，这严重阻碍了交互式Web应用程序的实现。在典型的网上购物场景中，用户浏览了几个页面，买了一盒饼干和两饮料。最后结帐时，由于HTTP的无状态性，不通过额外的手段，服务器并不知道用户到底买了什么。为了做到这点，就需要使用到Cookie了。服务器可以设置或读取Cookies中包含信息，借此维护用户跟服务器会话中的状态。

Cookie（复数形态：Cookies），是指某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密），cookie是由服务端生成，发送给客户端（通常是浏览器）的。

Session代表服务器与浏览器的一次会话过程，这个过程是连续的，也可以时断时续的。Session是一种服务器端的机制，Session 对象用来存储特定用户会话所需的信息。

### 2.The advantages & disadvantages of cookie and session.

#### Cookie:

##### advantages：

1.不易丢失，服务器重启或宕机并不影响本地cookie

2.响应速度快，因为存储于本地，访问会很快

5.不占用服务器资源，存放于本地浏览器，减轻服务器负担

##### disadvantages：

1.Cookie数量和长度有限制

2.安全性问题：如果cookie被人拦截了，那人就可以很容易取得所有的session信息。

3.有些状态不可能保存在客户端：例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

#### Session

##### advantages：

1.安全性较高；session的数据是存储在服务器端，客户端存储的只是数据的地址。

##### disadvantages：

1.占用服务器资源高，由于数据储存在服务器端

2.查询session信息可能会有数据库查询操作，带来性能问题

3.服务器重启或宕机，数据可能丢失