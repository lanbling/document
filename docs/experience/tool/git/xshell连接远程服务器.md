# xshell连接远程服务器



1. 生成本地秘钥

   ```bash
   ssh-keygen -t rsa -C 'yourname'
   ```

   在生成秘钥的过程中，会让你输入密码，直接enter（无密码）。

   这个秘钥文件的地址一般在

   ~/.ssh/，~代表家目录

2. 将客服端公钥导入服务器家目录下的.ssh/authorized_keys文件中

   ```bash
   ssh git@111.192.11.11 'cat >> .ssh/authorized_keys' < ~/.ssh/id_rsa.pub
   ```

   上面这种是直接在gitbash中导入公钥，也可以手动复制，在服务器的~/.ssh/authorized_key文件中粘贴公钥。

3. 用xshell连接

   <a data-fancybox title="image-20200602114550295" href="http://image.lanbling.com/image-20200602114550295.png">![image-20200602114550295](http://image.lanbling.com/image-20200602114550295.png)</a>