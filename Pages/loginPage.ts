import {Page} from "@playwright/test"
export class LoginPage{
    lpage:Page;

    constructor(TPage:Page){
        this.lpage=TPage;
    }

    async loadUrl(url:string){
        await this.lpage.goto(url);
        await this.lpage.waitForSelector(`.decorativeSubmit`,{state:"visible"});
    }
    async enterCredential(username:string,password:string){
        await this.lpage.locator(`#username`).fill(username);
        await this.lpage.locator(`#password`).fill(password);
    }
    async clickLogin(){
        await this.lpage.locator(`.decorativeSubmit`).click();
    }

}