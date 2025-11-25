import {test} from "@playwright/test"

test(`Strorage state`,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.waitForSelector(`.decorativeSubmit`,{state:`visible`});
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.click(`.decorativeSubmit`);
    await page.click(`//a[contains(text(),'CRM/SFA')]`);
    await page.click(`//a[text()='Leads']`);    
    await page.context().storageState({path:`Data/st.json`});
})