# 远程服务器拉vue项目，编译报错



## 报错提示

```node
npm ERR! Unexpected end of JSON input while parsing near
```



## 解决步骤

1. **删掉package.lock.json**

2. **清除cache**

   ```html
   npm cache clean --force
   ```

3. **进入下面这个文件夹清除cache**

   路径：C:/Users/PC/AppData/Roaming/npm-cache

   执行：

   ```html
   npm cache clean --force
   ```



## 过程

之前拉下来编译老是报错，报错代码提示当前的node与npm版本与项目不符合。于是找资料，清除了这两个地方的缓存，重新编译，通过。