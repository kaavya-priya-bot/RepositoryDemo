import { test, expect } from "@playwright/test"
import { request } from "http";

test.describe.serial(`Case`, async () => {
    let accessToken: any;
    let url: any;
    let token_type: any;
    let caseID: any;
    let caseNumber:any;

    test(`Generate token in API for Salesforce`, async ({ request }) => {
        const response = await request.post('https://login.salesforce.com/services/oauth2/token', {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG9VMBZCsTL9hnjhfIu7SAYIJwvjDKmAzDiJ6IKcuLjLfmNLEhOzLyJHk33.zZilc74S79lKQPyBeeQbJwh",
                "client_secret": "AAB73338004255067E4B1C80A3B796FB6D7E0EDF0666EA6995FEE5951121EF8F",
                "username": "kaavya.priya.kp@testleaf.com",
                "password": "Sales@200418"
            }
        })

        const responseBody = await response.json();
        accessToken = responseBody.access_token;
        url = responseBody.instance_url;
        token_type = responseBody.token_type;
        console.log(responseBody);
        console.log(accessToken);
        console.log(url);

    })
    test(`Create Case`, async ({ request }) => {
        const response = await request.post(`${url}/services/data/v65.0/sobjects/Case/` , {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token_type} ${accessToken}`
            },
            data: {
                "Status": "New",
                "Origin": "Email"
            }
        })
        await expect(response).toBeOK();
        console.log(response.status());
        console.log(response.statusText());
        const responseBody=await response.json();
        console.log(responseBody);
        caseID=responseBody.id;
    })

    test(`Retrieve Case Details`,async({request})=>{
        const response=await request.get(`${url}/services/data/v65.0/sobjects/Case/`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${token_type} ${accessToken}`
            }
        })
        await expect(response).toBeOK();
        console.log(response.status());
        console.log(response.statusText());
        const responseBody=await response.json();
        console.log(responseBody);
        const recentCaseID=responseBody.recentItems[0].Id;
        expect(caseID).toEqual(recentCaseID);
        caseNumber=responseBody.recentItems[0].CaseNumber;
    })

    test(`Update Case in UI`,async({page})=>{
        await page.goto(`https://login.salesforce.com/?locale=in`);
        await page.locator(`#username`).fill(`kaavya.priya.kp@testleaf.com`);
        await page.locator(`#password`).fill(`Sales@200418`);
        await page.locator(`#Login`).click();
        await page.waitForSelector(`//span[text()='Object Manager']`,{state:`visible`});
        await page.locator(`.slds-icon-waffle`).click();
        await page.waitForSelector(`//p[text()='Content']`,{state:`visible`});
        await page.getByRole(`button`,{name:`View All Applications`}).click();
        await page.getByTitle(`All Apps`).waitFor({state:`visible`});
        await page.getByPlaceholder(`Search apps or items...`).fill(`Cases`);
        await page.getByRole(`link`,{name:`Cases`}).click();
        await page.waitForSelector(`//span[text()='Recently Viewed']`,{state:`visible`});[]
        await page.locator("//span[text()='"+caseNumber+"']").click();
        await page.waitForSelector(`//span[text()='Share']`,{state:'visible'});
        await page.locator(`//button[@name='Edit']`).click();
        await page.waitForSelector(`//button[@name='SaveEdit']`,{state:'visible'});
        await page.getByRole(`combobox`,{name:`Priority`}).click();
        await page.locator(`//span[text()='Low']`).click();
        await page.getByRole(`combobox`,{name:`Case Origin`}).click();
        await page.locator(`//span[text()='Phone']`).click();
        await page.getByRole(`combobox`,{name:`SLA Violation`}).click();
        await page.locator(`//span[text()='No']`).click();
        await page.click(`//button[@name='SaveEdit']`);
        await expect(page.locator(`//span[text()='SLA Violation']/../following-sibling::div//lightning-formatted-text`)).toHaveText(`No`);
    })

    test(`Delete Case in API`,async({request})=>{
        const response=await request.delete(`${url}/services/data/v65.0/sobjects/Case/${caseID}`,{
            headers:{
                "Authorization":`${token_type} ${accessToken}`
            }
        })
        await expect(response).toBeOK();
        console.log(response.status());
        console.log(response.statusText());
    })

})