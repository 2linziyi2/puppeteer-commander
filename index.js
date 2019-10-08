#! /usr/bin/env node
const program = require('commander');
const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const path = require('path');

program
  .version('0.0.1')
  .option('-u, --url [url]', '请求的URL', 'https://www.baidu.com/')
  .option('-o, --out [out]', '输出的文件路径', "./")
  .option('-m, --isMobile [isMobile]', '是否手机模式打开, 1/0', '1')
  .option('-d, --delay [delay]', '等待关闭时间，毫秒', '10000')
  .parse(process.argv);

let url = program.url;
let out = program.out;
let delay = Number(program.delay);
let defaultViewport = program.isMobile == '1' ? {
  width: 375,
  height: 667,
  isMobile: true,
  hasTouch: true
} : {};

(async () => {
  let browser = await puppeteer.launch({ defaultViewport });
  let page = await browser.newPage();

  // har文件记录
  let har = new PuppeteerHar(page);
  await har.start({ path: path.join(out, 'harviewer.har'), saveResponse: true });

  // 网络请求tracing文件记录
  await page.tracing.start({
    path: path.join(out, 'trace.json'),
    screenshots: true
  });

  // 开启页面
  await page.goto(url);

  // 等待关闭延时
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })

  // 跟踪关闭
  await page.tracing.stop();
  await har.stop();
  await browser.close();

  console.log("抓取完成.\nharviewer.har请在http://www.softwareishard.com/har/viewer/查看.\ntrace.json请在chrome performance查看.");
})();