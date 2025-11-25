import { LeadPage } from "./LeadPage";
import { faker } from "@faker-js/faker";

export class CreateLead extends LeadPage{
    leadLastName:string=faker.person.lastName();
    leadFirstName:string=faker.person.firstName();
    companyName:string=faker.company.name();
    async fillMandatoryFields(){
        await this.lpage.fill(`#createLeadForm_companyName`,this.companyName);
        await this.lpage.fill(`#createLeadForm_firstName`,this.leadFirstName);
        await this.lpage.fill(`#createLeadForm_lastName`,this.leadLastName);
    }
    async clickSubmit(){
        await this.lpage.click(`.smallSubmit`);
    }
}