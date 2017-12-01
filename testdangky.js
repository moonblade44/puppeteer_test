const puppeteer = require('puppeteer');
const CREDS = require('./creds');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage(); // Mở trang mới
  /*const ten = '#firstname';
  const ho ='#lastname';
  const mail ='#email_address';
  const ngay ='#day';
  const thang = '#month';
  const nam = '#year';
  const matkhau = '#password';
  const xacnhanpass = '#confirmation';*/
  const button = '#form-validate > div.buttons-set > button > span > span';
  const dummymail = '#inboxfield';
  const inbox = 'body > section.content-block-nopad.content-3-2 > div > div.col-lg-5.col-md-6.col-sm-6 > div.panel.panel-info > div.panel-body > div.input-group > span > button';
  // Mở trang đăng ký Fahasa
  await page.goto('https://www.fahasa.com/customer/account/create/');

  //Mở trang đăng ký
  //await page.click('#topbar > div > div.col-lg-5.col-md-5.col-sm-7.col-xs-12.header-right > div:nth-child(1) > div > ul > li:nth-child(2) > a');

  // Bấm vào ô Tên
  //await page.click(ten);

  //Điền tên
  await page.type('#firstname',CREDS.ten, {delay: 200});

  // Bấm vào ô Họ
  //await page.click(ho);

  //Điền họ
  await page.type('#lastname',CREDS.ho, {delay: 200});

  // Bấm vào ô Địa chỉ Email
  //await page.click(mail);

  //Điền họ tên
  await page.type('#email_address',CREDS.mail, {delay: 200});

  // Bấm vào ô DD trong Ngày Sinh
  //await page.click(ngay);

  //Điền Ngày
  await page.type('#day',CREDS.ngay, {delay: 200});

  // Bấm vào ô Tháng trong Ngày Sinh
  //await page.click(thang);

  //Điền Tháng
  await page.type('#month',CREDS.thang , {delay: 200});

  // Bấm vào ô Năm trong Ngày Sinh
  //await page.click(nam);

  //Điền Năm
  await page.type('#year',CREDS.nam, {delay: 200});

  // Bấm vào ô Giới tính
  await page.click('#gender');

  //Chọn giới tính
  await page.evaluate(() => {
  document.querySelector('select option:nth-child(2)').selected = true;
})

  // Bấm vào ô Mật khẩu
  //await page.click(matkhau);

  //Điền mật khẩu
  await page.type('#password',CREDS.matkhau , {delay: 200});

  // Bấm vào ô Xác nhận mật khẩu
  //await page.click(xacnhanpass);

  //Điền lại mật khẩu
  await page.type('#confirmation',CREDS.xacnhanpass , {delay: 200});

  // Gửi thông tin đăng ký
  await page.click(button);

  //Chờ trang điều hướng
  await page.waitForNavigation();
  /*
  //Chuyển đến trang dummy mail
  await page.goto('https://www.mailinator.com/');

  //Bấm vào ô điền mail
  await page.click(dummymail);

  //Điền vào mail đã điền khi đăng ký
  await page.type(CREDS.mail , {delay: 200});

  //Bấm vào ô GO để đi đến Inbox
  await page.click(inbox);
  await page.waitForNavigation();

  await page.click('')*/
})();
