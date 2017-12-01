const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.lazada.vn/');
  await page.screenshot({path: 'lazada.png'});

  await browser.close();
})();
