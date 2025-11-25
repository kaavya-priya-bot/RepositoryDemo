import {   test} from "@playwright/test";


test(`ddfs`,async({browser})=>{
    const browserContext=await browser.newContext();
    const request=browserContext.request;
    let accessToken: any;
    let url: any;
    let token_type: any;
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