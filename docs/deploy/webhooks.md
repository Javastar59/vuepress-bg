---
title: 使用Github的webhooks进行自动化部署
customerLayoutList: true
---

> `Github webhooks`需要跟我们的服务器进行通信，确保是可以推送到我们的服务器，所以会发送一个带有`X-Hub-Signature`的`POST`请求，为了方便我们直接用第三方的库[github-webhook-handler](https://github.com/rvagg/github-webhook-handler)来接收参数并且做监听事件的处理等工作。

首先可以在`shell`脚本的同级目录下面执行下面命令初始化一个`package.json`:

```
npm init -f
```

然后执行下面命令安装上面提到的第三方库：

```
npm i -S github-webhook-handler
```

接下来创建我们的服务主入口文件`index.js`：

```
touch index.js
```

紧接着参考`github-webhook-handler`的`demo`编辑我们的`index.js`：

```js
var http = require('http');
var createHandler = require('github-webhook-handler');
var spawn = require('child_process').spawn;
var handler = createHandler({ path: '访问路径', secret: '密钥' });

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  })
}).listen(8086);

handler.on('error', function (err) {
  console.error('Error:', err.message)
});


handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    spawn( 'sh', ['./auto.sh'] );
});
```

然后利用node管理工具跑起来服务，这里使用了`pm2`：

> 全局安装pm2命令：npm i -g pm2

```bash
pm2 start index.js
```

查看启动状态

```bash
pm2 list
```

![](https://cdn.star59.top/bg/20190312/oowWVF36o1Ag.png)
