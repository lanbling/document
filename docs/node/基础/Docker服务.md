# 容器化应用Docker

![image-20200714003139475](http://image.lanbling.com/md/image-20200714003139475.png)

![image-20200714003719762](http://image.lanbling.com/md/image-20200714003719762.png)



## Docker主要特性

### 特点

- 文件、资源、网络隔离
- 变更管理、日志记录
- 写时复制

#### 安装

[Docker入门之安装教程](https://www.toimc.com/docker入门之安装教程/)

```bash
#启动docker服务
systemctl start docker

#查看docker服务
systemctl status docker

#运行docker项目，先查找本地，若本地没有，则去docker仓库拉取
docker run hello-world

#未知含义
docker ps
#查看所有的镜像
docker ps -a

#开启镜像加速，优先从中国区拉取镜像
vim /etc/docker/daemon.json
#配置如下：
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}

systemctl  daemon-reload
systemctl restart docker
```



## 使用docker启动服务

### 在docker中安装mysql服务

- 在dockerhub中查找mysql，并安装

  ```bash
  docker run --name 你的mysql名字 -e MYSQL_ROOT_PASSWORD=你的密码 -d mysql
  #-d：代表后台运行
  ```

  安装成功，查看是否有

  ```bash
  docker ps
  ```

- 删除服务，加入name叫做imooc-mysql

  ```bash
  docker rm imooc-mysql
  ```

  运行中的服务不能直接删除，要先停止

  ```bash
  docker stop imooc-mysql
  ```

  再删除

  ```bash
  docker rm imooc-mysql
  ```

- 查看docker中服务的详细信息，包括日志

  ```bash
  docker logs -f imooc-mysql
  ```

  

### 启动docker的另一种方式，可以指定端口号

- 指定端口启动

  ```bash
  docker run --name 你的服务名字 -e MYSQL_ROOT_PASSWORD=你的密码 -p 28001:3306 -d mysql
  ```

  如何理解写时复制，使用了本机的，不用再去安装

- 安装完看下有没跑起来

  ```bash
  docker logs -f 你的服务名字
  ```

- 使用navigate连接mysql

  端口号用的是28001

  

## Docker Compose

### 初始化docker-compose服务

- 下载docker-compose

  ```bash
  sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  ```

- 给予执行权限

  ```bash
  sudo chmod +x /usr/local/bin/docker-compose
  ```

- 测试命令

  ```bash
  docker-compose --version
  ```

- 进入home目录，创建yml文件

  ```
  vi docker-compose.yml
  ```

  文件内容如下：

  ```yaml
  version: '3'
  services:
    mysql1:
      image: mysql
      environment:
      - MYSQL_ROOT_PASSWORD=123456
      ports:
      - 28002:3306
      
    mysql2:
      image: mysql
      environment:
      - MYSQL_ROOT_PASSWORD=123456
      ports:
      - 28003:3306
  ```

- 运行yml文件，启动服务

  ```bash
  docker-compose up -d
  ```



### docker-compose的其它命令

- 停止所有服务

  ```bash
  docker-compose stop
  ```

- 删除容器

  ```bash
  docker-compose rm
  ```

  

## Docker仓库（Docker hub及私有仓库Harbor）

- 登录

  ```bash
  docker login
  ```

- 查看本地镜像

  ```bash
  docker ps
  ```

- 提交服务

  ```bash
  docker commit 包id  前缀/远程镜像的名字：1.0
  ```

  查看是否已经commit

  ```bash
  dokcer images
  ```

  推送到远程

  ```bash
  docker push 前缀/远程镜像的名字：1.0
  ```

  远程拉镜像

  ```bash
  docker pull 前缀/远程镜像的名字：版本号
  ```

  

## nvm

### 安装

- 从仓库下载安装文件

  ```bash
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```

- 在~/.bash_profile文件中添加

  ```bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  ```

- 关闭，输入nvm命令，看是否生效，如未生效

  ```bash
  command -v nvm
  ```

- 关闭终端后再打开



### 安装node

- 查看远程node的版本

  ```bash
  nvm ls-remote
  ```

- 安装某个版本

  ```bash
  nvm install v1.0.0
  ```

- 进行node版本的切换

  ```bash
  nvm use v1.0.0
  ```

  

## 发布一个node的模块

### 流程

- 创建目录并进入

  ```bash
  mkdir packNamge
  ```

- 初始化

  ```bash
  npm init
  ```

- 写代码了。一般是在window上的编辑器写，写完再上传

  ```bash
  #文件路径：packName/index.js
  
  ```

- 查看npm的镜像源，如果使用了淘宝的，得要改回来

  ```bash
  npm config list
  ```

  设置为npm的仓库地址

  ```bash
  npm set register https://register.npmjs.org/
  ```

- 添加一个npm用户，登录的过程

  ```bash
  npm addUser
  ```

  判断是否登录：

  ```bash
  npm whoami
  ```

- 发布

  ```bash
  npm publish
  ```

  