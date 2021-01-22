## Abiz React Scaffold

> 百卓react脚手架 


## 技术栈

- react
- react-router
- redux
- css modules
- 按需加载
- 热加载


## 安装


> `generator-abiz-react-app`脚手架基于`yeoman`开发，所以需要先安装`yeoman`

### 全局安装`yeoman`和`generator-abiz-react-app`

```
npm install -g yo generator-abiz-react-app
```

### 创建项目目录

```
//创建项目文件夹
mkdir [projectName]

//进入项目文件夹
cd [projectName]
```

### 生成项目

```
yo abiz-react-app
```

### 启动项目

```
npm run dev
```


## 命令

```bash
npm run dev //开发模式
npm run build //生产环境打包
``` 


## 目录结构

```
├── config                          # 配置，包括webpack
├── public
│   ├── favicon.png                 # Favicon
│   └── index.html                  # html模板文件
├── src
│   ├── components                  # 业务通用组件
│   ├── entry                       # webpack对应的入口文件，如果为文件，入口js的名称则为文件名称；
|   │                                 如果为文件夹，入口js的名称为文件夹名称，入口js文件的内容为index.jsx（必须叫index.jsx）的内容
│   ├── images                      # 图片
│   ├── pages                       # 业务页面入口
│   ├── router                      # 路由相关
│       ├── asyncLoad.jsx           # 页面按需加载组件
│       ├── index.jsx               # 路由根组件（入口js文件到这里）
│       ├── renderRoutes.jsx        # 路由渲染劫持组件（此处可以做一些权限，路由重定向之类的控制）
│       ├── routes.jsx              # 路由集中定义
│       ├── spa|spa2                # 与index.jsx一样（spa和spa2分别为另外的单页应用根组件）
│       ├── spaRoutes|spa2Routes    # 与routes.jsx一样（spaRoutes和spaRoutes2分别为另外的单页应用路由定义）
│   ├── styles                      # 全局样式
│   ├── utils                       # 工具库
│       ├── axios.js                # 异步请求方法，所有异步请求均调用该方法（此处可以对请求以及响应做一些统一的设置）
│       ├── reduxSimpleAsync.js     # 可以简化异步请求action和reducer的redux中间件
│   └── store.js                    # redux全局状态汇总文件
├── .babelrc                        # babel配置文件
├── package.json
```

## `package.json`文件配置

`webpackConfig`配置相关：

- `port`: 开发环境服务端口（`webpack-dev-server`端口）
- `devApiPath`: `npm run dev` 模式下请求的接口基础路径，如果希望通过mock平台调试直接把这个url换成mock平台的接口即可
- `assetsPath`: 静态资源在的基础路径
- `distApiPath`: npm run build 模式下请求的接口基础路径