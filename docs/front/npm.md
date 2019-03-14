---
title: npm和yarn加速配置与比较
conmment: true
customerLayoutList: true
---

[[toc]]

### npm加速镜像配置

淘宝镜像：[http://npm.taobao.org/](http://npm.taobao.org/)

1.通过config命令（持久使用）

设置命令：

```bash
npm config set registry https://registry.npm.taobao.org 
```

查看命令：

```bash
npm config get registry
```

2.命令行指定（临时使用）

```bash
npm --registry https://registry.npm.taobao.org info underscore 
```

### yarn简介

> Yarn是facebook发布的一款取代npm的包管理工具。

- 速度超快。 
  - Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全。 
  - 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 超级可靠。 
  - 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

### yarn安装与加速镜像:

1. 下载node.js，使用npm安装 

   ```bash
   npm install -g yarn  #全局安装
   yarn --version  #查看版本
   ```

2. Yarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可 

   ```bash {2}
   yarn config set registry https://registry.npm.taobao.org -g
   yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
   ```

### npm和yarn命令对比

| NPM                        | YARN                      | 说明                                   |
| -------------------------- | ------------------------- | -------------------------------------- |
| npm init                   | yarn init                 | 初始化某个项目                         |
| npm install/link           | yarn install/link         | 默认的安装依赖操作                     |
| npm install taco —save     | yarn add taco             | 安装某个依赖，并且默认保存到package.   |
| npm uninstall taco —save   | yarn remove taco          | 移除某个依赖项目                       |
| npm install taco —save-dev | yarn add taco —dev        | 安装某个开发时依赖项目                 |
| npm update taco —save      | yarn upgrade taco         | 更新某个依赖项目                       |
| npm install taco --global  | yarn global add taco      | 安装某个全局依赖项目                   |
| npm publish/login/logout   | yarn publish/login/logout | 发布/登录/登出，一系列NPM Registry操作 |
| npm run/test               | yarn run/test             | 运行某个命令                           |