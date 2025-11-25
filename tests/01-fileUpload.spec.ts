import { test } from "@playwright/test";
import path from "path";

test.only(`file Upload`,async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    await page.waitForSelector(`#file-submit`,{state:`visible`});
   await page.locator(`//input[@id='file-upload']`).setInputFiles(path.join(__dirname,`Vector.png`));
    //await page.locator(`//input[@id='file-upload']`).setInputFiles(`Data/Vector.png`);
    await page.locator(`#file-submit`).click();
    await page.waitForTimeout(3000);    
})
test(`upload without type=files`,async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    await page.waitForSelector(`#file-submit`,{state:`visible`});
    const [fileChoose]=await Promise.all([page.waitForEvent(`filechooser`), page.locator(`#drag-drop-upload`).click()]);
    await fileChoose.setFiles(`Data/Vector.png`);
    await page.waitForTimeout(3000);    
})