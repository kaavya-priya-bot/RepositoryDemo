import { HomePage } from "./homePage";

export class LeadPage extends HomePage{
    async clickCreateLead(){
        await this.lpage.click(`//a[text()='Create Lead']`);
    }
    async clickFindLead(){
        await this.lpage.click(`//a[text()='Find Lead']`);
    }
}