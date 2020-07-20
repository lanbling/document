(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{275:function(s,a,t){"use strict";t.r(a);var e=t(28),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"容器化应用docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器化应用docker"}},[s._v("#")]),s._v(" 容器化应用Docker")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://image.lanbling.com/md/image-20200714003139475.png",alt:"image-20200714003139475"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"http://image.lanbling.com/md/image-20200714003719762.png",alt:"image-20200714003719762"}})]),s._v(" "),t("h2",{attrs:{id:"docker主要特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker主要特性"}},[s._v("#")]),s._v(" Docker主要特性")]),s._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),t("ul",[t("li",[s._v("文件、资源、网络隔离")]),s._v(" "),t("li",[s._v("变更管理、日志记录")]),s._v(" "),t("li",[s._v("写时复制")])]),s._v(" "),t("h4",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.toimc.com/docker%E5%85%A5%E9%97%A8%E4%B9%8B%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker入门之安装教程"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动docker服务")]),s._v("\nsystemctl start docker\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker服务")]),s._v("\nsystemctl status docker\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行docker项目，先查找本地，若本地没有，则去docker仓库拉取")]),s._v("\ndocker run hello-world\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#未知含义")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有的镜像")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启镜像加速，优先从中国区拉取镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置如下：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nsystemctl  daemon-reload\nsystemctl restart docker\n")])])]),t("h2",{attrs:{id:"使用docker启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用docker启动服务"}},[s._v("#")]),s._v(" 使用docker启动服务")]),s._v(" "),t("h3",{attrs:{id:"在docker中安装mysql服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在docker中安装mysql服务"}},[s._v("#")]),s._v(" 在docker中安装mysql服务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在dockerhub中查找mysql，并安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --name 你的mysql名字 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的密码 -d mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-d：代表后台运行")]),s._v("\n")])])]),t("p",[s._v("安装成功，查看是否有")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除服务，加入name叫做imooc-mysql")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" imooc-mysql\n")])])]),t("p",[s._v("运行中的服务不能直接删除，要先停止")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker stop imooc-mysql\n")])])]),t("p",[s._v("再删除")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" imooc-mysql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看docker中服务的详细信息，包括日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker logs -f imooc-mysql\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"启动docker的另一种方式，可以指定端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动docker的另一种方式，可以指定端口号"}},[s._v("#")]),s._v(" 启动docker的另一种方式，可以指定端口号")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("指定端口启动")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --name 你的服务名字 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("你的密码 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28001")]),s._v(":3306 -d mysql\n")])])]),t("p",[s._v("如何理解写时复制，使用了本机的，不用再去安装")])]),s._v(" "),t("li",[t("p",[s._v("安装完看下有没跑起来")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker logs -f 你的服务名字\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用navigate连接mysql")]),s._v(" "),t("p",[s._v("端口号用的是28001")])])]),s._v(" "),t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),t("h3",{attrs:{id:"初始化docker-compose服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化docker-compose服务"}},[s._v("#")]),s._v(" 初始化docker-compose服务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载docker-compose")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.23.2/docker-compose-'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n")])])])]),s._v(" "),t("li",[t("p",[s._v("给予执行权限")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])])])]),s._v(" "),t("li",[t("p",[s._v("测试命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose --version\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进入home目录，创建yml文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi docker-compose.yml\n")])])]),t("p",[s._v("文件内容如下：")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD=123456\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 28002"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD=123456\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 28003"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("运行yml文件，启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose up -d\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"docker-compose的其它命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose的其它命令"}},[s._v("#")]),s._v(" docker-compose的其它命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("停止所有服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose stop\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除容器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"docker仓库（docker-hub及私有仓库harbor）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker仓库（docker-hub及私有仓库harbor）"}},[s._v("#")]),s._v(" Docker仓库（Docker hub及私有仓库Harbor）")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("登录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker login\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看本地镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("提交服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker commit 包id  前缀/远程镜像的名字：1.0\n")])])]),t("p",[s._v("查看是否已经commit")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("dokcer images\n")])])]),t("p",[s._v("推送到远程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker push 前缀/远程镜像的名字：1.0\n")])])]),t("p",[s._v("远程拉镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull 前缀/远程镜像的名字：版本号\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" nvm")]),s._v(" "),t("h3",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("从仓库下载安装文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("在~/.bash_profile文件中添加")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME-}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/.nvm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME}")]),s._v('/nvm"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("关闭，输入nvm命令，看是否生效，如未生效")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" -v nvm\n")])])])]),s._v(" "),t("li",[t("p",[s._v("关闭终端后再打开")])])]),s._v(" "),t("h3",{attrs:{id:"安装node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[s._v("#")]),s._v(" 安装node")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看远程node的版本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nvm ls-remote\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装某个版本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v1.0.0\n")])])])]),s._v(" "),t("li",[t("p",[s._v("进行node版本的切换")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nvm use v1.0.0\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"发布一个node的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布一个node的模块"}},[s._v("#")]),s._v(" 发布一个node的模块")]),s._v(" "),t("h3",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建目录并进入")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" packNamge\n")])])])]),s._v(" "),t("li",[t("p",[s._v("初始化")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])])]),s._v(" "),t("li",[t("p",[s._v("写代码了。一般是在window上的编辑器写，写完再上传")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件路径：packName/index.js")]),s._v("\n\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看npm的镜像源，如果使用了淘宝的，得要改回来")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list\n")])])]),t("p",[s._v("设置为npm的仓库地址")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" register https://register.npmjs.org/\n")])])])]),s._v(" "),t("li",[t("p",[s._v("添加一个npm用户，登录的过程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" addUser\n")])])]),t("p",[s._v("判断是否登录：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("发布")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);