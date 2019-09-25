#! /usr/bin/env node
const program = require('commander');
const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');

program
  .version('0.0.1')
  .option('-u, --url [url]', '请求的URL', 'https://www.baidu.com/')
  .option('-o, --out [out]', '输出的文件路径。例如：./results.har', "./results.har")
  .parse(process.argv);

let url = program.url;
let out = program.out;

(async () => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  let har = new PuppeteerHar(page);
  await har.start({ path: out });

  await page.goto(url);

  await har.stop();
  await browser.close();
})();