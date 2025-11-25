import {test} from "@playwright/test"
import { LogDefectINJira } from "./after-Hooks";

test.afterEach(``,async({},testInfo)=>{
    await LogDefectINJira(testInfo);
})

test(`JIRA Integration Using Playwright`,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.waitForSelector(`.decorativeSubmit`,{state:`visible`});
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.click(`decorativeSubmit`);
})