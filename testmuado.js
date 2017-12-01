const puppeteer = require('puppeteer');
const CREDS = require('./creds');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage(); // Mở trang mới

  // Mở trang Fahasa
  await page.goto('https://www.fahasa.com/');

  //Bấm vào phần Đăng nhập
  await page.click('#topbar > div > div.col-lg-7.col-md-7.col-sm-7.col-xs-12.header-right > div:nth-child(1) > div > ul > li.last > a');

  //Bấm vào phần Địa Chỉ Email
  await page.click('#youama-email');

  //Nhập địa chỉ email
  await page.type(CREDS.mail, {delay: 200});

  //Bấm vào ô Mật khẩu
  await page.click('#youama-password');

  //Nhập mật khẩu
  await page.type(CREDS.matkhau , {delay: 200});

  //Đăng nhập
  await page.click('#wrapper > div.page > div.main-container.col1-layout > div > div > div > div > div.youama-login-window > div > div > div.youama-window-box.last.fhs-no-mt > div > button > span');
})();
