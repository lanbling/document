# 企业标准的开发环境搭建




## 工具

- git

  ssh root@IP  输入密码  

- 使用SSH秘钥方式远程连接Linux

- 查看运行状态  

  ```bash
  service sshd status
  ```

  查看服务端口

  ```bash
  netstat -anlp | grep sshd
  ```

- 修改sshd服务的端口号

  1. 查看配置文件，将端口号修改为10022

     ```bash
     vim /etc/ssh/sshd_config
     ```

  2. 配置防火墙

     ```bash
     #centos7
     
     #检查一下防火墙
     firewall-cmd --permanent --query-port=10022/tcp
     
     #如果是no，就添加一下
     firewall-cmd --permanent --add-port=10022/tcp
     
     #成功后重载防火墙
     firewall-cmd --reload
     
     #再重启防火墙服务
     systemctl restart firewalld.service
     ```

     ```bash
     #centos6
     
     #修改在防火墙关闭22端口开启10022端口
     vim /etc/sysconfig/iptables
     
     #重启防火墙
     /etc/init.d/iptables restart
     
     #修改ssh服务器的端口号为10022，与上面的一致
     vim /etc/ssh/sshd_config
     
     #重启ssh服务器
     /etc/init.d/sshd restart
     ```

     

  3. 添加端口到SELinux

     ```bash
     semanage port -a -t ssh_port_t -p tcp 10022
     ```

     确认是否添加成功

     ```bash
     semanage port -l | grep ssh
     ```

  4. 重启ssh

     ```bash
     systemctl restart sshd.service
     ```



## 意外情况

##### 如果semange命令不存在：

- 命令不存在，反查

  ```bash
  yum whatprovides semanage
  ```

   得到安装包

  ```bash
  yum install packagename
  ```

  ```bash
  semanage port -l | grep ssh
  ```

  多余的端口，可以删除

  ```bash
  semanage port -d -t ssh_port_t -p tcp portNumber
  ```



- 如果发现网络未连接

  进入网络配置目录

  ```bash
  cd /etc/sysconfig/network-scripts/
  ```

  编辑网络文件

  ```bash
  vim ifcfg-ens33
  #将BOOTPROTO设为dhcp
  #将ONBOOT设为yes
  ```

  保存退出，重启网络服务

  ```bash
  service network restart
  ```

- 删除防火墙端口

  ```bash
  firewall-cmd --permanent --remove-port=10022/tcp
  ```

- 查看开放的端口号

  ```bash
  firewall-cmd --list-ports
  ```

  