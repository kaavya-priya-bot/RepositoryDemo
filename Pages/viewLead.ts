
import { CreateLead } from "./createLead";
import { expect } from "@playwright/test";

export class ViewLead extends CreateLead{
    async verifyFirstName(){
        await expect(this.lpage.locator(`#viewLead_firstName_sp`)).toHaveText(this.leadFirstName);
        console.log(await this.lpage.innerText(`#viewLead_firstName_sp`)); 
    }
}