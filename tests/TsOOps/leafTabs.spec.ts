import {test} from "@playwright/test"
import {LoginPage} from "./lfPage"
test(`Login Test`,async({page})=>{
    let lg=new LoginPage(page);
    await lg.loadUrl(`http://leaftaps.com/opentaps/control/main`);
    await lg.enterCredential(`democsr`,`crmsfa`);
    await lg.clickLogin();
})