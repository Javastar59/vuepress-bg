---
title: 基于VuePress搭建个人网站
conmment: true
customerLayoutList: true
---
![vuepress](https://cdn.star59.top/bg/20190311/MsuzAuH4CpIA.png-style)

### vuepress 是什么？

Vue 驱动的静态网站生成器

- 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

- 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。

- VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

安装教程，具体看vuepress[官网](https://v1.vuepress.vuejs.org/zh/)，介绍很详细

> 注意 VuePress基于node 8.0+，推荐使用1.x版本，官方提供了很多插件和主题。

### 项目配置

VuePress 遵循 **“约定优于配置”** 的原则，最终的目录结构如下：

```
vuepress                     - 主工程目录
└─ docs                     - 主要的开发目录
   └─ .vuepress             - vuepress配置目录
      └─ dist               - 静态资源默认生成目录
      └─ public             - 公共资源目录
         └─ imgs
            ├─icon.png
      ├─ config.js          - js配置文件
      ├─ override.styl      - css覆盖，配置显示颜色等样式
      ├─ style.styl         - 同上
   └─ about                 - 导航栏（关于）
   └─ article               - 导航栏（文章）
      └─ essay
      └─ other
      └─ technology
   └─ home                  - 导航栏（首页）
   ├─ README.md             - 网站默认首页
├─ node_mudules             - node依赖包
├─ deploy.sh                - 自动部署脚本
├─ package.json             - webpack 配置文件
```

::: tip
请留意目录名,不要出现大写。
:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

### 默认的页面路由

此外，对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

### 利用GitHub page 部署项目，并自定义域名

**创建一个repository** 这个repository的名字还有要求必须是`<你的用户名>.github.io`，然后点击setting，在下面进行**如下配置：**

![](https://cdn.star59.top/bg/20190311/I5NTz5MP3bO3.png)

> 注意，如果选择了自定义域名，还需要配置dns解析到当前的GitHubPage

这里以阿里云的云解析dns服务配置为例，为了防止IP改变配置失效，直接采用cname进行域名解析

![](https://cdn.star59.top/bg/20190311/kvMjI1qatdv6.png)

> 配置完dns解析后，大概需要五到十分钟生效

