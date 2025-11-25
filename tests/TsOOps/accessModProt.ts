import { superCl } from "./accessMod";

class subCl extends superCl{
    update(){
        console.log(this.empid);
    }
}
const ex=new subCl();
ex.update();