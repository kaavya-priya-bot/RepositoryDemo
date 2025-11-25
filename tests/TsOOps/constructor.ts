import { chromium, Page } from "@playwright/test";

class salesforce {
    LPage: Page;

    constructor(tpage: Page) {
        this.LPage = tpage;
    }
    async loadPage(url: string) {
        await this.LPage.goto(url);
        await this.LPage.waitForSelector(`#username`, { state: `visible` });
    }
    async enterCredential(username: string, password: string) {
        await this.LPage.locator(`#username`).fill(username);
        await this.LPage.locator(`#password`).fill(password);
    }
    async clickLogin() {
        await this.LPage.locator(`#Login`).click();
    }
    async getTitle(): Promise<string> {
        return await this.LPage.title();
    }
    async closeBrowser() {
        await this.LPage.close();
    }
}
async function basic() {
    const browser = await chromium.launch({ headless: false, timeout: 700000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    const sf = new salesforce(page);
    await sf.loadPage(`https://login.salesforce.com/?locale=in`);
    await sf.enterCredential(`kaavya.priya.kp@testleaf.com`, `Sales@200418`);
    await sf.clickLogin();
    console.log(await sf.getTitle());
    await sf.closeBrowser();

}
basic();