import {test} from "@playwright/test"
import dotenv from "dotenv"

let filename=process.env.envFile||'qa';
dotenv.config({path:`Data/${filename}.env`})
test('Read From Env',async({page})=>{
    const url=<string>process.env.BaseURL;
    const username=<string>process.env.SF_username;
    const password=<string>process.env.SF_password;
    await page.goto(url);
    await page.locator(`#username`).fill(username);
    await page.locator(`#password`).fill(password);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(3000);
})