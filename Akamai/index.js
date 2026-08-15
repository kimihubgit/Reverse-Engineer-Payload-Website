const puppeteer = require('puppeteer');
const url = 'https://mydhl.express.dhl/vn/vi/home.html?cid=xbu_1.0_portal_login_exp#/createNewShipmentTab';

(async () => {
    const browser = await puppeteer.launch({ headless: true }); // headless: false nếu muốn xem browser
    const page = await browser.newPage();

    // Giả lập User-Agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36');

    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 3000 });

        // Chờ tab tạo shipment load (có thể cần điều chỉnh selector)
        await page.waitForSelector('#createNewShipmentTab', { timeout: 2000 }).catch(() => console.log('Không chờ được tab cụ thể'));

        // Lấy tất cả input trên page
        const inputs = await page.evaluate(() => {
            return Array.from(document.getElementsByTagName('input')).map(input => {
                const attrs = {};
                for (let attr of input.attributes) {
                    attrs[attr.name] = attr.value;
                }
                return {
                    outerHTML: input.outerHTML,
                    attributes: attrs
                };
            });
        });

        console.log(`Tìm thấy ${inputs.length} thẻ <input>:`);
        inputs.forEach((input, index) => {
            console.log(`${index + 1}: ${input.outerHTML}`);
            console.log('   Attributes:', input.attributes);
            console.log('---');
        });

        if (inputs.length === 0) {
            console.log('Vẫn không có input – có thể cần login hoặc chờ lâu hơn.');
        }

    } catch (error) {
        console.error('Lỗi:', error.message);
    } finally {
        await browser.close();
    }
})();