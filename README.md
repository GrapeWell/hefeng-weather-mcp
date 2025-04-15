这是一个基于和风天气API的mcp服务，用于回答天气问题，已接入7天天气预报和活跃的天气警报。功能扩展，可参考和风API文档
进行开发。

## 开发
git clone https://github.com/GrapeWell/hefeng-weather-mcp.git
cd hefeng-weather-mcp

## 下载依赖
npm install

## 构建项目
npm run build

## 配置
在.env文件中，填写API_KEY和API_URL

## 调试

```shell
npx @modelcontextprotocol/inspector node build/index.js
```
