import {test} from "@playwright/test"
import credential from "../Data/login.json"
import dotenv from "dotenv"

let filepath=process.env.envName||'qa'
dotenv.config({path:`Data/${filepath}.env`})
test(`test`,async()=>{
    console.log(process.env.SF_username);
})
test.fixme(`test1`,async()=>{
    console.log(process.env.SF_username);
})


