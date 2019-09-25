# puppeteer-commander
通过puppeteer和puppeteer-har两个库生成网站的har文件，分析网站加载情况。

PS: har文件可以通过[harviewer](http://www.softwareishard.com/har/viewer/)显示出可视化的加载信息

## 安装
```
npm install -g puppeteer-commander
```

## 执行
```
pup --[url|out]

--url 请求的URL，默认为: https://www.baidu.com/
--out 输出的文件路径。例如：./results.har
```

