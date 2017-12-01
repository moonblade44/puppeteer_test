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
  await page.keyboard.type(CREDS.mail, {delay: 200});

  //Bấm vào ô Mật khẩu
  await page.click('#youama-password');

  //Nhập mật khẩu
  await page.keyboard.type(CREDS.matkhau , {delay: 200});

  //Đăng nhập
  await page.click('#wrapper > div.page > div.main-container.col1-layout > div > div > div > div > div.youama-login-window > div > div > div.youama-window-box.last.fhs-no-mt > div > button > span');

  await page.waitForNavigation();

  //Tìm kiếm sản phẩm:
  await page.click ('#search');
  await page.keyboard.type('Sword Art Online',{delay: 200});
  await page.click('#search_mini_form > div > div > span');
  await page.waitForNavigation({waitUntil: 'networkidle2'});

  //Chọn sản phẩm
  await page.click('#wrapper > div.page > div.main-container.col2-left-layout > div > div.container > div > div > div.col-main.col-lg-9.col-md-9.col-sm-12.col-xs-12 > div > div > div.category-products.row > ul > li:nth-child(1) > div.item-inner > div > div.products.clearfix > div.product.images-container > a > span > img');
  //await page.waitForNavigation({waitUntil: 'networkidle2'});

  //Cho vào giỏ hàng
  //await page.close();
  //await browser.newPage();
  await page.goto('https://www.fahasa.com/sword-art-online-001-sao-1-tap-1-aincrad.html');
  await page.click('#product_addtocart_form > div.row > div.product-shop.col-md-9.col-sm-12.col-sms-12 > div > div.add-to-box.add-to-box2 > div.add-to-cart.col-md-6.col-sm-12.col-sms-12 > button > span > span');

  //Chọn Thanh toán
  await page.waitFor(3000);
  await page.goto('https://www.fahasa.com/checkout/cart');

  //Xác nhận thanh toán giỏ hàng
  await page.click('#block-totals > div.totals > ul > li > button > span > span');

  //Điền thông tin đơn hàng
  await page.waitFor(3000);
  await page.goto('https://www.fahasa.com/onestepcheckout/index/');
  await page.click('#billing\\3a firstname');
  //Thao tác Ctrl+A
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  //Tên
  //Bấm nút Backspace trên bàn phím
  await page.keyboard.press('Backspace',{delay: 100});
  await page.waitFor(1000);
  //Thả Ctrl+A
  await page.keyboard.up('A');
  await page.keyboard.up('Control');
  //Điền tên
  await page.keyboard.type(CREDS.ten,{delay: 100});

  //Họ
  await page.click('#billing\\3a lastname');
  //Thao tác Ctrl+A
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  //Bấm nút Backspace trên bàn phím
  await page.keyboard.press('Backspace');
  //Thả Ctrl+A
  await page.keyboard.up('A');
  await page.keyboard.up('Control');
  //Điền họ
  await page.keyboard.type(CREDS.ho,{delay: 100});

  //Điện thoại
  await page.click('#billing\\3a telephone');
  await page.keyboard.type('01245267516');

  //Nhập lại điện thoại
  await page.click('#billing\\3a billing-ctelephone');
  //await page.keyboard.type('01245267516');

  //Địa chỉ
  await page.click('#billing\\3a street1');
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  await page.keyboard.press('Backspace');
  //Thả Ctrl+A
  await page.keyboard.up('A');
  await page.keyboard.up('Control');
  await page.keyboard.type('406/32 Đồng Đen Phường 13');

  //Quốc gia
  await page.evaluate(() => {
  document.querySelector('#billing\\3a country_id > option:nth-child(30)').selected = true;
})

  //Tỉnh-thành phố
  await page.evaluate(() => {
  document.querySelector('#billing\\3a region_id > option:nth-child(2)').selected = true;
})

  //Quận-Huyện
  await page.click('#billing\\3a city');
  await page.keyboard.type('Quận Tân Bình');
  /*await page.evaluate(() => {
  document.querySelector('#billing\\3a city_id > option:nth-child(15)').selected = true;
})*/

  //Phương thức thanh toán
  await page.click('#checkout-payment-method-load > dt:nth-child(6) > label');

  //Xác nhận đơn hàng
  await page.click('#onestepcheckout-button-place-order > span > span');

})();
