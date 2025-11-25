import { test, expect } from '@playwright/test';




test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  let n=[1,2,3]
  n.forEach((a,index)=>{
    console.log(`${a} and ${index}`)
  })
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test.only( `alert`,async ({page}) => {
  /* page.on(`dialog`,async(alert)=>{
    const alertType=alert.type();
    if(alertType===`confirm`){
      await alert.accept();
    }
    else
    await alert.dismiss();
  }) */
  await page.goto(`https://www.myntra.com/?`);
  await page.waitForSelector(`//div[@class='desktop-actions']`,{state:'visible'});
  await page.locator(`//a[@class='desktop-main' and text()='Men']`).hover();
  await page.locator(`//a[text()='Topwear']/../following-sibling::li/a[text()='T-Shirts']`).click();
  await page.waitForSelector(`//span[text()='Brand']`,{state:'visible'});
  await page.locator(`//input[@value='Roadster']/following-sibling::div`).click();
  //const frame= page.frameLocator(`//iframe[@id='iframeResult']`);
  //await frame.locator(`//button[text()='Try it']`).click();
  await page.waitForTimeout(3000);  
})
