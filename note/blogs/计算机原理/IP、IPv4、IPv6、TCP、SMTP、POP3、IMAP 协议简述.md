---
title: IP、IPv4、IPv6、TCP、SMTP、POP3、IMAP 协议简述
date: 2019-01-06
tags:
 - 计算机原理
categories:
 -  计算机原理
---

**IP** : IP协议用于网络通信（计算机之间的通信），互联网上每个计算机的唯一标识就是IP地址，类似123.123.123.123。如果一台计算机同时接入到两个或更多的网络，比如路由器，它就会有两个或多个IP地址，所以，IP地址对应的实际上是计算机的网络接口，通常是网卡。

**IPv4**：IP地址实际上是一个32位整数（称为IPv4），以字符串表示的IP地址如192.168.0.1实际上是把32位整数按8位分组后的数字表示，目的是便于阅读。

**IPv6**：Pv6地址实际上是一个128位整数，它是目前使用的IPv4的升级版，以字符串表示类似于2001:0db8:85a3:0042:1000:8a2e:0370:7334。

**TCP** ：TCP协议则是建立在IP协议之上的。TCP协议负责在两台计算机之间建立可靠连接，保证数据包按顺序到达。TCP协议会通过握手建立连接，然后，对每个IP包编号，确保对方按顺序收到，如果包丢掉了，就自动重发。

**SMTP** : Simple Mail Transfer Protocol，发邮件时，MUA（Mail User Agent——邮件用户代理，也就是我们使用的邮件软件）和MTA（Mail Transfer Agent——邮件传输代理，就是那些Email服务提供商）使用的协议就是SMTP。 SMTP 、POP 以及IMAP都是在电子邮件投递传输之间的协议。 

**POP3** :POP：Post Office Protocol，收邮件时，MUA和MDA使用的协议，目前版本是3，俗称POP3。

**IMAP** : Internet Message Access Protocol, 收邮件时，MUA和MDA使用的协议，目前版本是4，优点是不但能取邮件，还可以直接操作MDA上存储的邮件，比如从收件箱移到垃圾箱，等等。

希望能够帮助到大家，有什么问题可以 直接评论即可，如果不够详细的话也可以说，我会及时回复的。