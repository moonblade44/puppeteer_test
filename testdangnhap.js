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

  await page.waitForNavigation();
  //Tìm kiếm sản phẩm:
  await page.click ('#search');
  await page.type('Sword Art Online',{delay: 200});
  await page.click('#search_mini_form > div > div > span');
  await page.waitForNavigation();

  //Chọn sản phẩm
  await page.click('#wrapper > div.page > div.main-container.col2-left-layout > div > div.container > div > div > div.col-main.col-lg-9.col-md-9.col-sm-12.col-xs-12 > div > div > div.category-products.row > ul > li:nth-child(1) > div.item-inner > div > h2 > a');
  await page.waitForNavigation();

  //Cho vào giỏ hàng
  await page.click('#product_addtocart_form > div.row > div.product-shop.col-md-9.col-sm-12.col-sms-12 > div > div.add-to-box.add-to-box2 > div.add-to-cart.col-md-6.col-sm-12.col-sms-12 > button > span > span');
  await page.waitForNavigation({waitUntil: 'networkidle'});

  //Chọn Thanh toán ngay
  await page.click('#shopping_cart');
  await page.waitForNavigation();

  //Xác nhận thanh toán giỏ hàng
  await page.click('#block-totals > div.totals > ul > li > button > span > span');
  await page.waitForNavigation({waitUntil: 'networkidle'});

  //Điền thông tin đơn hàng
  //Tên
  await page.click('#billing\\3a firstname');
  //Thao tác Ctrl+A
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  //Bấm nút Backspace trên bàn phím
  await page.press('Backspace');
  //Điền tên
  await page.type('Dương');

  //Họ
  await page.click('#billing\\3a lastname');
  //Thao tác Ctrl+A
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  //Bấm nút Backspace trên bàn phím
  await page.press('Backspace');
  //Điền họ
  await page.type('Nguyễn Hải');

  //Điện thoại
  await page.click('#billing\\3a telephone');
  await page.type('01245267516',{delay: 200});

  //Nhập lại điện thoại
  await page.click('#billing\\3a billing-ctelephone');
  await page.type('01245267516',{delay: 200});

  //Địa chỉ
  await page.click('#billing\\3a street1');
  await page.keyboard.down('Control');
  await page.keyboard.down('A');
  await page.press('Backspace');
  await page.type('406/32 Đồng Đen Phường 13',{delay: 200});

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
  await page.type('Quận Tân Bình',{delay: 200});
  /*await page.evaluate(() => {
  document.querySelector('#billing\\3a city_id > option:nth-child(15)').selected = true;
})*/

  //Phương thức thanh toán
  await page.click('#checkout-payment-method-load > nth-child(6) > label');
  //let element = await page.$('#checkout-payment-method-load > dt:nth-of-type(6) > label)');
  //console.log(element ? 'Has element!' : 'Failed to get element');

  //Xác nhận đơn hàng
  await page.click('#onestepcheckout\\-button\\-place\\-order');

})();
