# Lab10说明文档

###### 17300290033高祥兴

### Exercise7

#### Screenshots

![](Exercise7-1.png)

![](Exercise7-2.png)

#### 代码解释：

##### 第一种方法：

通过PDO扩展为PHP访问数据库定义了一个轻量级的一致接口，然后生成PDO对象来进行查询，设置sql语句查询Artists表中的数据，并且通过lastName排序，并且将ArtistID和LastName打印出来

##### 第二种方法：

通过mysqli_connect() 函数打开一个到 MySQL 服务器的新的连接，然后进行查询，查询的是Genre表中的数据，并且通过GenreName排序，查找完成后需要释放和关闭连接

### Exercise8

#### Screenshots

![](Exercise8-1.png)

![](Exercise8-2.png)

#### 代码解释：

##### function outputArtists():

先生成一个PDO对象，通过PDO查询Artists表中的数据，只需要按照LastName排序的前30个，并且将其包装至一个超链接中，点击对应的lastName可显示

##### function outputSinglePainting($row):

用echo写的html代码，通过数据库中的数据读出路径把单独的一幅画及文字数据用设定的样式显示出来，包括图片，title，excerpt等

##### function outputPaintings():

生成PDO对象，通过PDO把查询到的画家所对应的画都依次展示出来，需要调用outputSinglePainting($row)函数

### Exercise9

#### Screenshots

![](Exercise9-1.png)

![](Exercise9-2.png)

#### 问题1：

##### PDO中执行SQL语句有三种方法：

1.exec()方法：返回执行SQL 语句后受影响的行数

2.query()方法：用于返回执行查询后的结果集

3.预处理语句：prepare()语句和execute()语句，首先，通过prepare()方法做查询准备工作，然后通过execute()方法执行查询，并且还可以通过bindParam()方法来绑定参数给execute()方法

#### 问题2：

##### 预处理语句的优点：

1.查询只需要被解析（或准备）一次，但可以使用相同或不同的参数执行多次。当查询准备好（Prepared）之后，数据库就会分析，编译并优化它要执行查询的计划。

2.传给预处理语句的参数不需要使用引号，底层驱动会为你处理这个。如果你的应用独占地使用预处理语句，你就可以确信没有SQL注入会发生。

### Exercise10

#### Screenshots

![](Exercise10-1591517930691.png)

#### 代码解释：

先生成一个PDO对象来进行数据库操作，通过排序好的GenreID从Gernes表中读取对应的一系列数据，其中outputSingleGenre(\$row)函数是将单个图片进行展示，通过constructGenreLink(\$id, $label)函数构建超链接，会重定向到genre.php文件并加上id参数，最后的效果是会将一连串genre依次展示，点击后跳转并显示对应的详情