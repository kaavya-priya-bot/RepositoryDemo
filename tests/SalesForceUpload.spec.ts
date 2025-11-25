import {test} from '@playwright/test'



test(`Upload`,async({page})=>{
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://login.salesforce.com/?locale=in`);
    const url = page.url()
    console.log(`The url of the page is ${url}`);
    await page.locator(`#username`).fill(`kaavya.priya.kp@testleaf.com`);
    await page.locator(`#password`).fill(`Sales@200418`);
    await page.locator(`#Login`).click();
    await page.locator(`.slds-icon-waffle`).click();
    await page.waitForSelector(`//p[text()='Content']`,{state:'visible'});
    await page.getByRole(`button`,{name:`View All Applications`}).click();
    await page.waitForSelector(`//h2[text()='App Launcher']`,{state:`visible`});
    await page.getByPlaceholder(`Search apps or items...`).fill(`Accounts`);
    await page.getByRole(`link`,{name:`Accounts`}).click();
    await page.waitForSelector(`//div[text()='Import']`,{state:`visible`});
    await page.click(`//div[text()='New']`);
    await page.waitForSelector(`//h2[text()='New Account']`,{state:'visible'});
    await page.locator(`//input[@name='Name']`).fill(`AccountNAme`);
    await page.click(`//button[@aria-label='Rating']`);
    await page.click(`//span[text()='Warm']`);
     await page.click(`//button[@aria-label='Type']`);
    await page.click(`//span[text()='Prospect']`);
    await page.click(`//button[@aria-label='Industry']`);
    await page.click(`//span[text()='Banking']`);
    await page.click(`//button[@aria-label='Ownership']`);
    await page.click(`//span[text()='Public']`);
    await page.click(`//button[@name='SaveEdit']`);
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`,{state:`visible`});
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`,{state:`hidden`});
    await page.locator(`(//input[@name='fileInput'])[1]`).setInputFiles(`Data/file.txt`);
    await page.getByRole(`button`,{name:`Done`}).click();
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`,{state:`visible`});
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`,{state:`hidden`});
    await page.waitForTimeout(3000);
})