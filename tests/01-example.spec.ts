import { chromium, test } from "@playwright/test"


test(`test1`, async ({ browser }) => {

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto(`https://www.amazon.in`);
    await page1.waitForTimeout(2000);
    const page2 = await context1.newPage();

    await page2.goto(`https://www.redbus.in`);

    await page2.waitForTimeout(2000);
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto(`https://www.amazon.in`);
    await page3.waitForTimeout(2000);
    const page4 = await context2.newPage();

    await page4.goto(`https://www.redbus.in`);

    await page4.waitForTimeout(2000);
})
test(`window handling`, async ({ context, page }) => {
    await page.goto(`https://www.flipkart.com`)
    await page.getByPlaceholder(`Search for products, brands and more`).fill(`phones`);
    await page.getByPlaceholder(`Search for products, brands and more`).press(`Enter`);
    const newpage = context.waitForEvent('page');
    await page.getByText(`Samsung Galaxy A35 5G (Awesome Lilac, 128 GB)`, { exact: true }).click();
    const childpage = await newpage;
    await childpage.getByRole(`button`, { name: `Buy Now` }).waitFor({ state: `visible` });
    await childpage.locator(`//button[text()='Add to cart']`).click();
    await page.bringToFront();

    await page.waitForTimeout(3000);

})

test(`kjgfk`, async ({ context, page }) => {
    await page.goto(`https://leafground.com/window.xhtml`);
    await page.waitForSelector(`//span[text()='Open Multiple']`, { state: `visible` });
    const newpage = context.waitForEvent(`page`);
    await page.locator(`//span[text()='Open']`).click();
    const childpage = await newpage;
    await childpage.waitForSelector(`//span[text()='Send']`, { state: `visible` });
    await page.bringToFront();
    await page.waitForTimeout(3000);


})
test.only(`hjhg`, async () => {
    const browser=await chromium.launch();
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto(`https://leafground.com/window.xhtml`);
    console.log(await page.title());
    let mainpage=page.title();
    await page.waitForSelector(`//span[text()='Open Multiple']`, { state: `visible` });
    await Promise.all([(context.waitForEvent(`page`), await page.locator(`//span[text()='Close Windows']`).click())]);
    await page.waitForLoadState("domcontentloaded")
    const allPages = context.pages();
    for (let p of  allPages) {
        if(await p.title()!=await mainpage){
            await p.close();
        }
    }
    await page.waitForTimeout(3000);

})