# puppeteer-har-commander
通过puppeteer和puppeteer-har两个库生成网站的har文件，分析网站加载情况。

PS: har文件可以通过[harviewer](http://www.softwareishard.com/har/viewer/)显示出可视化的加载信息

## 安装
```
npm install -g puppeteer-har-commander
```

## 执行
```
Usage: puppeteer-har-commander [options]

Options:
  -V, --version              output the version number
  -u, --url [url]            请求的URL (default: "https://www.baidu.com/")
  -o, --out [out]            输出的文件路径 (default: "./")
  -m, --isMobile [isMobile]  是否手机模式打开, 1/0 (default: "1")
  -d, --delay [delay]        等待关闭时间，毫秒 (default: "10000")
  -h, --help                 output usage information
```

