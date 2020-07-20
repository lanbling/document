# Mock数据



## 综述

![image-20200715181444337](http://image.lanbling.com/md/image-20200715181444337.png)



## 适用Docker安装DOClever

### 步骤

- 使用docker

  [DOClever Docker 镜像](https://github.com/sx1989827/DOClever/tree/master/docker)

- linux服务器，home目录下创建doclever

- 创建docker-compose.yml文件，填充一下内容

  ```yaml
  version: "2"
  services:
    DOClever:
      image: lw96/doclever
      restart: always
      container_name: "DOClever"
      ports:
      - 20080:10000
      volumes:
      - /srv/doclever/file:/root/DOClever/data/file
      - /srv/doclever/img:/root/DOClever/data/img
      - /srv/doclever/tmp:/root/DOClever/data/tmp
      environment:
      - DB_HOST=mongodb://mongo:27017/DOClever
      - PORT=10000
      links:
      - mongo:mongo
  
    mongo:
      image: mongo:latest
      restart: always
      container_name: "mongodb"
      volumes:
      - /srv/doclever/db:/data/db
  ```

- 启动docker

  ```bash
  docker-compose up -d
  ```

- 查看运行的容器

  ```bash
  docker ps | grep doclever
  ```

- 放行20080端口

  查看放行端口情况

  ```bash
  firewall-cmd --list-all
  ```

  ```bash
  #放行端口
  firewall-cmd --add-port=20080/tcp --zone=public --permanent
  firewall-cmd --reload
  ```

- 访问浏览器



### DOClever的使用(平台)

- linux服务器域名是192.168.23.132，之前使用docker开启的DOClever服务是咋10040端口，直接访问

  ```
  http://192.168.23.132:10040
  ```

  初始账号密码都为DOClever，修改管理员密码，保证安全

- 注册账号

  注册账号-》新增项目-》新增分组

- 本地开启代理

  在设置中下载net.js，在本地运行

  ```
  node net.js http://192.168.23.132:10040/mock/5f0fa6a8bb0e53000b1b760d http://localhost:8081
  ```

  第一个url是mock数据的

  第二个url是真实的接口地址

- 根据接口的完成状态，会自动的去请求第一个url和第二个url





## 使用Mock.js进行Mock数据开发

- 安装&起步

  官网地址：[Mock.js](http://mockjs.com/)

- 语法规范

  模板方法

  占位符方法

- 常用方法及使用

  random方法

  mock方法