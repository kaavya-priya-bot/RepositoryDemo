import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage{

    async clickCRMSFA(){
        await this.lpage.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    }

    async clickLogOut(){
        await this.lpage.click(`.decorativeSubmit`);
    }

}