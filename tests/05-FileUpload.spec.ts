import {expect, test} from '@playwright/test'
import path from 'path';

test(`Upload`, async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    await page.waitForSelector(`#file-submit`,{state:'visible'});
    await page.locator(`#file-upload`).setInputFiles(`Data/download.png`);
    await page.click(`#file-submit`);
    await page.waitForSelector(`//a[text()='Elemental Selenium']`,{state:'visible'});
    await expect(page.locator(`//div[@class='example']/h3`)).toHaveText(`File Uploaded!`);
})

test.only(`lo a file`,async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    await page.waitForSelector(`#file-submit`,{state:'visible'});
    const [upload]= await Promise.all([page.waitForEvent(`filechooser`),page.click(`#drag-drop-upload`)])
    await upload.setFiles(path.join(__dirname,`../Data/Vector.png`));
    await page.waitForTimeout(3000);
})
test(`download`,async({page})=>{
    await page.goto(`https://the-internet.herokuapp.com/download`);
    await page.waitForSelector(`//h3[text()='File Downloader']`,{state:'visible'});
    const alocator=page.locator(`//div[@class='example']/a`);
    const alocatorCount=await alocator.count();
    for(let i=0;i<alocatorCount;i++){
        if(await alocator.nth(i).innerText()===`file.json`){
            const [fileDownload]= await Promise.all([page.waitForEvent(`download`),alocator.nth(i).click()]);
            await fileDownload.saveAs(path.join(__dirname,`../Data/example1.json`));
        }
    }
    await page.waitForTimeout(3000);
    })

