import { test } from "@playwright/test"
import credentials from "../Data/login.json"

test(`Read from Json`, async ({ page }) => {
    const url = credentials.url;
    await page.goto(url);
    await page.locator(`#username`).fill(credentials.username);
    await page.locator(`#password`).fill(credentials.password);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(3000);
})
test.only('env',async({page})=>{
    console.log(process.env.username);
})
