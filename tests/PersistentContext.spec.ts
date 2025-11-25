import {test,chromium} from "@playwright/test";

test.describe.serial(``,()=>{
test(`persisternt context`,async()=>{
    const userDataDir=`./browContext`;
    const context=await chromium.launchPersistentContext(userDataDir,{
        headless:false,
        permissions:[`notifications`],
        httpCredentials:{
            username:`admin`,
            password:`testleaf`
        }
    })
    const page=await context.newPage();
    await page.goto(`https://leafground.com/auth.xhtml`);
    await page.getByRole(`button`,{name:`Basic Auth`}).click();
    //await page.waitForTimeout(3000);
})

    test(`pr`,async()=>{
        const userDataDir=`./browContext`;
       // const brow=await chromium.launch();
    const context=await chromium.launchPersistentContext(userDataDir)
        const page=await context.newPage(); 
        await page.goto(`http://leafground.com:8090/login`);
    //await page.getByRole(`button`,{name:`Basic Auth`}).click();
    await page.waitForTimeout(3000);
    })
    })