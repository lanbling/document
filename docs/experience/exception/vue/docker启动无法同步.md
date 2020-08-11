# docker无法宿主文件无法同步到容器中

连接

```bash
docker exec -it ktvme bash
```

关闭容器

```
docker stop ktvme
```

移除容器

```
docker stop ktvme
```

配置文件目录： D:\work\ngin.cong\

底下有ktvme目录，和ktvme.sh

ktvme.sh文件如下：

```bash
#!/bin/bash
docker run --restart=always -v D:\work\ngin.conf\ktvme:/etc/nginx/conf.d -v D:\work\ktvme:/home/www/src/ktvme -p 80:80 —name ktvme -td 192.168.80.64/ktvme/phpenv
```

复制ktvme.sh文件中的内容执行

```
docker run --restart=always -v D:\work\ngin.conf\ktvme:/etc/nginx/conf.d -v D:\work\ktvme:/home/www/src/ktvme -p 80:80 --name ktvme -td 192.168.80.64/ktvme/phpenv
```



总结：移除了容器，重启了容器，那就是启动过程的配置出了问题。



## Windows10平台安装docker

### 检查电脑的虚拟化是否开启

进入任务管理器（ctrl+alt+delete），点击性能->cpu ,查看虚拟化是否已启用，如果虚拟化是已禁用，那么你需要重启电脑进入bios开启虚拟化

### 开启Hyper-v

进入电脑的控制面板->程序->启用或关闭Windows功能->把Hyper-v勾上，启用后电脑会重启

### 下载并安装Docker for Windows

https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows



## 搭建K米开发环境

### 安装Docker证书

- 注：win10安装Docker Desktop后，只需要将证书放在任何位置后，双击安装证书到系统环境中即可

1. docker证书存放路径为

   > */etc/docker/certs.d*
   > *每个子目录存放对应镜像仓库需要的证书（不需要证书则不用配置），如下图*
   >
   > ![image-20200803104052545](http://image.lanbling.com/md/image-20200803104052545.png)

2. 子目录中证书名为docker-registry-ca.crt，内容示例如下

   >*——-BEGIN CERTIFICATE——-*
   *xxxxxxxxxxxxxxxxxxxxxxxxxxxx*
   *xxxxxxxxxxxxxxxxxxxxxxxxxxxx*
   *——-END CERTIFICATE——-*

3. *docker login #尝试登录即可*

### Nginx配置文件

略

### 容器运行脚本

> ```bash
> > #!/bin/bash
> >
> > docker run —restart=always -v /local/nginx.conf.d/path:/etc/nginx/conf.d -v /local/src/path:/home/www/src/kmmobile -v /home/www/log/mobile:/home/www/log/mobile -p 8200:8200 —name kmmobile_shorturl -td 192.168.80.64/ktvme/phpenv
> 
> 
> ```





## 容器启动脚本记录

1. 后台项目基于ktvme启动

   ```bash
   docker run -d -p 8118:8118 -v /var/www/ApphtglDevelop:/home/www/src/kmhtgl --name kmhtgl 4fe64aaf4870  /bin/ktvme_start.sh
   ```

   



## 问题

在gulp中指定具体的文件名