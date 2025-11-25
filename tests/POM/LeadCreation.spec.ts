import {test} from "@playwright/test"
import { ViewLead } from "../../Pages/viewLead"

test(`Lead Creation`,async({page})=>{
    let lc=new ViewLead(page);
    await lc.loadUrl(`http://leaftaps.com/opentaps/control/main`);
    await lc.enterCredential(`democsr`,`crmsfa`);
    await lc.clickLogin();
    await lc.clickCRMSFA();
    await lc.clickLead();
    await lc.clickCreateLead();
    await lc.fillMandatoryFields();
    await lc.clickSubmit();
    await lc.verifyFirstName();
})