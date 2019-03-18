---
title: java数据类型总结笔记
customerLayoutList: true
---

![](https://cdn.star59.top/bg/20190317/Wod173vvuvOu.png)

### 数据类型转换

> boolean类型与其他基本类型不能进行类型的转换（既不能进行自动类型的提升，也不能强制类型转换）


![img](https://cdn.star59.top/bg/20190317/Em8cG6AoHYzH.jpg)

转换图的几点说明：

1. 红色的int和double代表，在Java中，整数类型（byte/short/int/long）中，对于未声明数据类型的整形，其默认类型为int型。在浮点类型（float/double）中，对于未声明数据类型的浮点型，默认为double型。

2. 上下两个大的蓝色箭头表示，从低到高类型自动转换，高到低需要强制转换，原因很简单，高位表示的范围大，低位表示的范围小。

3. 在byte char short之间的爆炸符号，代表的意思虽然类型从小到大自动转换，但是byte不能转成char,char也不能转成short。因为byte和short是是数值型的变量，char字符型的变量。数值型变量有符号（第一位）而在char中则无正负之分。byte转short自然就是可以的了。

