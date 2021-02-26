---
title: CPU逻辑数量、CPU物理核心、几核几线程简述
date: 2019-01-05
tags:
 - 计算机原理
categories:
 -  计算机原理
---


### 1. CPU 物理核心
CPU物理核心就是计算机上实际配置的CPU个数。
在 Linux 上可以打开 cat /proc/cpuinfo  来查看，其中的 physical id 就是每个物理CPU的ID，你能找到几个 physical id 就代表你的计算机实际有几个CPU。
在 Linux 下可以通过以下指令  来查看你的物理CPU个数
```linux
 grep ‘physical id’ /proc/cpuinfo | sort -u | wc -l  
```
### 2. CPU 核数 
CPU核数是指CPU上集成的处理数据的 CPU核心个数，单核指 CPU 核心数一个，双核则指的是两个。
通常每个 CPU 下的核数都是固定的，比如你的计算机有两个物理CPU，每个CPU是双核，那么你的计算机就是四核的。
Linux 的CPU核心总数也可以在 /proc/cpuinfo 里面通过指令 cat /proc/cpuinfo 查看的到，其中的 core id 指的是每个物理CPU下的 CPU 核的 id，能找到几个 core id 就代表你的计算机有几个核心。
在 Linux 下可以通过以下指令  来查看你的 CPU 核心总数

```linux
cat /proc/cpuinfo | grep “cpu cores” | wc -l
```
### 3. CPU逻辑
操作系统可以使用逻辑 CPU 来模拟出真实 CPU 的效果。
在之前没有多核处理器的时候，一个 CPU 只有一个核，而现在有了多核技术，其效果就好像把多个 CPU 集中在一个 CPU 上。
当计算机没有开启超线程时，逻辑 CPU 的个数就是计算机的核数。而当超线程开启后，逻辑 CPU 的个数是核数的两倍。实际上逻辑 CPU的数量就是平时称呼的几核几线程中的线程数量，在 Linux 的 cpuinfo 中逻辑 CPU 数就是 processor 的数量。
在 Linux 下可以通过以下指令  来查看你的 CPU 逻辑数量
```linux
cat /proc/cpuinfo | grep “processor” | wc -l
```
### 4. 总结
简单总结以下：
CPU 总核数 = 物理 CPU 个数 X 每颗物理 CPU 的核数 
CPU 逻辑数 = 物理 CPU 个数 X 每颗物理 CPU 的核数 X 超线程数

知道上面这些，我们常说的几核几线程就好理解了。假设计算机有一个物理CPU核心，是双核的，支持超线程。那么这台计算机就是双核四线程的。 
### 5. python查看CPU逻辑总数和CPU物理核心
利用python的第三方模块psutil， 可以很轻松的查看自己的电脑的 CPU 逻辑总数和 CPU 物理核心个数；代码如下：

```python
import psutil

print(psutil.cpu_count())  # CPU逻辑数量
print( psutil.cpu_count(logical=False))  # CPU物理核心 # 2说明是双核超线程, 4则是4核非超线程
```


以上内容借鉴于一位前辈的资源，感谢！

希望能够帮助到大家，有什么问题可以 直接评论即可，如果不够详细的话也可以说，我会及时回复的。