import {test} from "@playwright/test"

test.use({storageState:`Data/st.json`});

test(`Use annotation with storage state`,async({page})=>{
    await page.goto(`http://leaftaps.com/crmsfa/control/leadsMain`);
    await page.click(`//a[text()='Create Lead']`);
    await page.locator(`#createLeadForm_companyName`).waitFor({state:`visible`});
})