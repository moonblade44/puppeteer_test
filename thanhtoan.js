const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  //toan1trang thanh toán
  await page.goto('https://123pay.vn/ib/cc/?orderNo=123P1710217355854&merchantCode=FAHASACOM&amount=77450&description=VGhhbmggdG9hbiBkb24gaGFuZyAxMDA0MDUwMzU&bankCode=123PCC&checksum=124868541e782b7d8024d3b02fa36a1e5be9ebd1');


  // Bấm vào ô Số thẻ
  await page.click('#maskCardNumber');

  //Điền số thẻ
  await page.keyboard.type('4916466565714340', {delay: 200});

  // Bấm vào ô Họ tên chủ thẻ
  await page.click('#fullName');

  //Điền họ tên chủ thẻ
  await page.keyboard.type('NGUYEN TR HUY TUAN', {delay: 200});

  // Bấm vào ô Ngày hết hạn
  await page.click('#ccExpire');

  //Điền ngày
  await page.keyboard.type('02/18', {delay: 200});

  // Bấm vào ô CVV/CVC2
  await page.click('#maskCardCVV');

  //Điền CVV/CVV2
  await page.keyboard.type('230', {delay: 200});

  // Gửi thông tin thẻ
  await page.click('#btSubmit');

  //Chờ trang điều hướng
  await page.waitForNavigation();

})();
