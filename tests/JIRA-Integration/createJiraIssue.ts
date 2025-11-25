import axios from "axios";

const endpoint = `https://kaavya-priya.atlassian.net/rest/api/2/issue`;
const username = `kaavya.priya.kp@gmail.com`;
const password = `ATATT3xFfGF0JYelea83BjuQ6Tfd4cgsAz4DWMRpFXa4rc480EHF07-xCLQWuvrEsYzIodQAJBIbtrsDBToh0CgIlh935yE4ktu1jGgoc8E4KaVpTuqUF5PvC9DkvEP8v3lX7VT-Nq6n4iCkO_JlJAPzQlhnHknhnh3u4x4zFRLMaDssrbZAI6k=D4FAB8BA`;
const key = `PK`;

export async function createJIRAIssue(summary: string, description: string) {

    const issueJson = {
        "fields": {
            "project": {
                "key": key
            },
            "summary": summary,
            "description": description,
            "issuetype": {
                "name": "Bug"
            }
        }
    }

    await axios.post(endpoint, issueJson, {
        'auth': {
            username: username,
            password: password
        },
        'headers': {
            'Content-Type': 'application/json'
        }
    })

}