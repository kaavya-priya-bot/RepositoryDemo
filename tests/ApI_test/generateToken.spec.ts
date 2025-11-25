import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test"
import { log } from "console";
import { request } from "http";

test.describe.serial(`Run serial`, async () => {
    let accessToken: any;
    let url: any;
    let token_type: any;
    let leadID: any;

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

    test(`Create Lead`, async ({ request }) => {
        const response = await request.post(`${url}/services/data/v65.0/sobjects/Lead/`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `${token_type} ${accessToken}`
            },
            data: {

                "LastName": `${faker.person.lastName()}`,
                "Company": `${faker.company.name()}`,
                "Status": "Working - Contacted"
            }
        })
        const responseBody = await response.json();
        console.log(responseBody);
        leadID = responseBody.id;
    })

    test(`Fetch specific Lead`, async ({ request }) => {
        const response = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${leadID}`, {
            headers: {
                "Authorization": `${token_type} ${accessToken}`,
            }
        })
        console.log(await response.json());
    })

    test(`Update Lead`, async ({ request }) => {
        const response = await request.patch(`${url}/services/data/v65.0/sobjects/Lead/${leadID}`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `${token_type} ${accessToken}`
            },
            data: {
                "FirstName": `${faker.person.firstName()}`,
                "Salutation": "Mr.",
                "Rating": "Hot"
            }
        })
        await expect(response).toBeOK();
        console.log(response.status());
    })





})