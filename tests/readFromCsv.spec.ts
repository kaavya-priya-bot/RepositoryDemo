import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"

let records: any[]=parse(fs.readFileSync('Data/login.csv'),{
    columns:true,
    skip_empty_lines:true
});    
for(let data of records){
test(`Read from csv ${data.testid}`,async()=>{
    console.log(data.username);
    console.log(data.password);
})
}