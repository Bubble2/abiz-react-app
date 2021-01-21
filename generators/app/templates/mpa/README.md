


## Abiz React Scaffold

> 百卓react脚手架 

## 技术栈

- react
- react-router
- css modules
- 按需加载
- 热加载


## 命令

```bash
npm run dev //开发模式
npm run build //生产环境打包
``` 

## `package.json`文件配置

`webpackConfig`配置相关：

`port`: 开发环境服务端口（`webpack-dev-server`端口）
`devApiPath`: `npm run dev` 模式下请求的接口基础路径，如果希望通过mock平台调试直接把这个url换成mock平台的接口即可
`assetsPath`: 静态资源在的基础路径
`distApiPath`: npm run build 模式下请求的接口基础路径


