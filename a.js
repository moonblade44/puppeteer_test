const puppeteer = require('puppeteer');
const CREDS = require('./creds');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  const dummymail = '#inboxfield';
  const inbox = 'body > section.content-block-nopad.content-3-2 > div > div.col-lg-5.col-md-6.col-sm-6 > div.panel.panel-info > div.panel-body > div.input-group > span > button';

 await page.goto('https://www.mailinator.com/');

 //Bấm vào ô điền mail
 await page.click(dummymail);

 //Điền vào mail đã điền khi đăng ký
 await page.type("khi@mailinator.com" , {delay: 200});

 //Bấm vào ô GO để đi đến Inbox
 await page.click(inbox);
 await page.waitForNavigation();
 await page.click (userToSearch);

})();
