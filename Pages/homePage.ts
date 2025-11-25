import { LoginPage } from "./loginPage";
import { WelcomePage } from "./welcomePage";

export class HomePage extends WelcomePage{
    async clickLead(){
        await this.lpage.click(`//a[text()='Leads']`);
    }
    async clickAccounts(){
        await this.lpage.click(`//a[text()='Accounts']`);
    }
}