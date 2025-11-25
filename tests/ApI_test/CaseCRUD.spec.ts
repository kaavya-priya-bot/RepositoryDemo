import {test} from "@playwright/test"
import { generateToken } from "./CaseUtility";

test('Case using API',async({request})=>{
 await generateToken(request);
})