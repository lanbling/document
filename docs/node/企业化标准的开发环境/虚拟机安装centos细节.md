# 虚拟机安装centos细节



## 需要理解的概念

桥连接：linux主机的域名和window主机的域名在同一个网段，同一间教室的机子可以直接访问到linux主机。

缺点：容易造成IP冲突

NAT模式：linux主机和window主机不在一个网段，其它学生机子访问不到linux主机。但是linux主机可以通过代理的方式访问到其它学生的机子。

![image-20200711115338496](http://image.lanbling.com/md/image-20200711115338496.png)



## 使用vmtools

作用：实现window和linux中复制粘贴功能

- 如何设置

安装完将压缩包从vmtools目录复制粘贴到opt目录中。

tar -zxvf filename

进入解压缩的文件夹，执行pl后缀的文件，一路回车

重启终端：reboot

- 设置共享文件夹

  在window中建立一个文件夹，在虚拟机中设置共享文件夹。

  虚拟机->设置共享文件夹

  linux中的路径：/mnt/hgfs/share



## Linux的目录结构

##### boot：存放的是启动Linux时使用的核心文件，包括一些核心文件以及镜像文件

##### etc：配置文件

###### opt：安装包放这里

###### usr：非常重要，类似于windows下的program file文件。安装目录：/usr/local

###### var：变动比较频繁的文件。例如：日志

###### mnt：让用户临时挂在别的文件系统。例如：共享文件

bin：放指令

sbin：超级用户可以使用的

dev：设备文件，类似于windows的设备管理器

media：linux识别硬件，挂载到这个目录

selinux：类似于360，安全的

proc src  sys：内核，别动目录，哈哈

home：存放普通目录的主目录，useradd后就会生成目录

tmp：临时文件的目录



![image-20200712111814773](http://image.lanbling.com/md/image-20200712111814773.png)



## 远程连接服务器

需要Linux开启一个sshd服务，端口号22

可以使用setup查看系统服务，看sshd是否开启。

一个系统可以用65535个端口可以监听