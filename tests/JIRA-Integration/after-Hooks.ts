import { TestInfo } from "@playwright/test";
import { createJIRAIssue } from "./createJiraIssue";

export async function LogDefectINJira(testInfo:TestInfo) {
    if(testInfo.status==='failed'||testInfo.status==='timedOut'){
        const summary= `Test Case is ${testInfo.status}... ${testInfo.title}`;
        const description=`Here is the error ${testInfo.error?.message}`;
        await createJIRAIssue(summary,description);
        console.log(`Issue is created in JIRA ${testInfo.status}`);
    }
}