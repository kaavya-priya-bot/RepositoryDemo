import { faker } from "@faker-js/faker";
import {APIRequest, APIRequestContext, request} from "@playwright/test"
let accessToken: any;
    let url: any;
    let token_type: any;
    let leadID:any;

export async function generateToken(requestContext:APIRequest): Promise<void> {
    
   // const requestContext = await request.newContext();
      const request=await requestContext.newContext();
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
}

export async function createLead(requestContext:APIRequest): Promise<void> {
    
    // const requestContext = await request.newContext();
       const request=await requestContext.newContext();
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
}