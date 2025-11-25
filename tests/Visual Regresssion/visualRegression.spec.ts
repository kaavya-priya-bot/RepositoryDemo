import {expect, test} from "@playwright/test"
import path from "path";

test(``,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    const sl= page.locator(`#username`);
    await expect(sl).toHaveScreenshot();
    /* const ss=await page.screenshot();
    expect(ss).toMatchSnapshot(); */
})

test(`fnghsdfg`,async({page})=>{
    await page.goto(`file:///C:/Users/kaavy/OneDrive/Desktop/index.html`);
    await expect(page).toHaveScreenshot();
})

test.only('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  //await page.waitForTimeout(4000);
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});

