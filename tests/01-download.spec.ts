import {test} from "@playwright/test"

test(`download`,async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`);
    await page.waitForSelector(`//h5[text()='Basic Upload']`,{state:`visible`});
    const [donld]=await Promise.all([page.waitForEvent(`download`),page.locator(`//span[text()='Download']`).click()]);
    await donld.saveAs(`data/download.png`);
    await page.waitForTimeout(3000);
})

test.only(`frame`,async({page})=>{
    await page.goto(`https://leafground.com/frame.xhtml`);
    await page.frameLocator(`//iframe[@src='default.xhtml']`).locator(`//button[text()='Click Me']`).click();
    
    const frames=page.frames();
    console.log(`frames in the dom is ${frames.length}`);

    await page.frameLocator(`//iframe[@src='page.xhtml']`).frameLocator('iframe').locator(`//button[text()='Click Me']`).click();

    await page.waitForTimeout(3000);
})